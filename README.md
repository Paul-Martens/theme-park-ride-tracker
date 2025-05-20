# Theme Park Ride Tracker

This app allows you to log which rides you've been on while visiting a theme park. It can also show overviews of past visits.

## Local Development

The app uses Supabase for its database and authentication. To set up local development, install the [Supabase CLI](https://supabase.com/docs/guides/local-development/cli/getting-started). Then follow these steps to configure the local project:

- Run `supabase start`
- Copy the file `.env` to `.env.local`
- Look up the field `API URL` (use `supabase status` if needed) and use its value for the `VITE__SUPABASE__URL` key
- Look up the field `anon key` (use `supabase status` if needed) and use its value for the `VITE__SUPABASE__KEY` key

Finally, start the local development server:

- Run `pnpm dev`

## Production

Make sure to configure the `VITE__SUPABASE__URL` and `VITE__SUPABASE__KEY` environment variables through Project Settings in Vercel. The values can be found in the Supabase dashboard through Connect button in the app header.
