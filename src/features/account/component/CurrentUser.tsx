import { supabase, useSession } from '~/services/supabase';

function signOut() {
  supabase.auth.signOut();
}

function CurrentUser() {
  const { session } = useSession();

  if (!session) return null;

  return (
    <p>
      {session.user.email}
      <br />
      <button onClick={signOut}>Sign Out</button>
    </p>
  );
}

export { CurrentUser };
