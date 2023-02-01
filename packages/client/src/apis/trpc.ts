import { createTRPCClient } from '@trpc/client';

export const trpc = createTRPCClient({
  url: 'http://localhost:8000/trpc',
  headers: () => {
    return {
      Authorization: 'Bearer ' + Math.random(),
    };
  },
});
