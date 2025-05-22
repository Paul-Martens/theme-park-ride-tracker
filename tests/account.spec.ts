import { expect, test as base } from '@playwright/test';

import {
  createTemporaryUser,
  generateTemporaryCredentials,
} from './helpers/supabase';

import { deleteTemporaryUserByEmail } from './helpers/supabase';

import type { Credentials } from './helpers/supabase';

/**
 * Generate temporary credentials and add them as a fixture.
 */
const test = base.extend<{ credentials: Credentials }>({
  credentials: ({}, use) => {
    const credentials = generateTemporaryCredentials();
    use(credentials);
  },
});

test.describe('Account', () => {
  test.afterEach(async ({ credentials }) => {
    await deleteTemporaryUserByEmail(credentials.email);
  });

  /**
   * The Sign Up form registers new users. During local development,
   * users are automatically confirmed and active after signing up.
   * On production, a confirmation email is sent first.
   */
  test.describe('Sign Up', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/account/sign-up');
    });

    /**
     * The Sign Up form should render its fields without issues.
     */
    test('Sign Up form renders without issues', async ({ page }) => {
      await expect(page.getByLabel('Email Address')).toBeVisible();
      await expect(page.getByLabel('Password')).toBeVisible();
      await expect(page.getByRole('button', { name: 'Sign Up' })).toBeVisible();
    });

    /**
     * When signing up a new account, a message about email
     * verification should show.
     */
    test('Show a message after signing up', async ({ page, credentials }) => {
      const message =
        'Thank you for signing up. Please check your email to activate your account.';

      await expect(page.getByText(message)).not.toBeVisible();

      await page.getByLabel('Email Address').fill(credentials.email);
      await page.getByLabel('Password').fill(credentials.password);
      await page.getByRole('button', { name: 'Sign Up' }).click();

      await expect(page.getByText(message)).toBeVisible();
    });

    /**
     * Signing up an existing account should show an error.
     */
    test('Show an error message when trying to sign up an existing account', async ({
      page,
      credentials,
    }) => {
      const message = 'User already registered';

      await createTemporaryUser(credentials);

      await expect(page.getByText(message)).not.toBeVisible();

      await page.getByLabel('Email Address').fill(credentials.email);
      await page.getByLabel('Password').fill(credentials.password);
      await page.getByRole('button', { name: 'Sign Up' }).click();

      await expect(page.getByText(message)).toBeVisible();
    });
  });

  /**
   * The Sign In form is used to log into user accounts.
   */
  test.describe('Sign In', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/account/sign-in');
    });

    /**
     * The Sign In form should render its fields without issues.
     */
    test('Sign In form renders without issues', async ({ page }) => {
      await expect(page.getByLabel('Email Address')).toBeVisible();
      await expect(page.getByLabel('Password')).toBeVisible();
      await expect(page.getByRole('button', { name: 'Sign In' })).toBeVisible();
    });

    /**
     * After signing in, the user should be redirect to Home.
     */
    test('Redirect to home after signing in', async ({ page, credentials }) => {
      await createTemporaryUser(credentials);

      await page.getByLabel('Email Address').fill(credentials.email);
      await page.getByLabel('Password').fill(credentials.password);
      await page.getByRole('button', { name: 'Sign In' }).click();

      await expect(page).toHaveURL('/');

      await expect(
        page.getByRole('heading', { name: 'Theme Park Ride Tracker' }),
      ).toBeVisible();
    });

    /**
     * Signing into a non-existant account or with the wrong
     * credentials should show an error.
     */
    test('Show an error message for signing in with invalid credentials', async ({
      page,
      credentials,
    }) => {
      const message = 'Invalid login credentials';

      await expect(page.getByText(message)).not.toBeVisible();

      await page.getByLabel('Email Address').fill(credentials.email);
      await page.getByLabel('Password').fill(credentials.password);
      await page.getByRole('button', { name: 'Sign In' }).click();

      await expect(page.getByText(message)).toBeVisible();
    });
  });
});
