import { motion } from 'motion/react';

import { Page } from '~/ui/layout/Page';

function Home() {
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

export { Home };
