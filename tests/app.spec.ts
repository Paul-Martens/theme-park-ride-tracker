import { expect, test } from '@playwright/test';

test.describe('App', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:8010');
  });

  test('Shows app name as title', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Theme Park Ride Tracker' }),
    ).toBeVisible();
  });
});
