import { trpc } from '@/apis/trpc';
import React, { useEffect } from 'react';

import styles from './index.module.scss';

const Hello = () => {
  useEffect(() => {
    const init = () => {
      return Promise.all([
        trpc.query('hello'),
        trpc.query('hello'),
        trpc.query('hello'),
        trpc.query('hello'),
        trpc.query('hello'),
      ]);
    };
    (async () => {
      const hello = await init();
      console.log(hello);
    })();
  }, []);

  return (
    <>
      <h1 className={styles.title}>Hello Hello</h1>
    </>
  );
};

export default Hello;
