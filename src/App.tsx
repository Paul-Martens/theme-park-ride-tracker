import { motion } from 'motion/react';

import { useSession } from '~/services/supabase';

import { Page } from '~/ui/layout/Page';

import './App.css';

function App() {
  const { isPending } = useSession();

  if (isPending) {
    return null;
  }

  return (
    <Page>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.25,
          duration: 0.25,
        }}
      >
        Theme Park Ride Tracker
      </motion.h1>
    </Page>
  );
}

export { App };
