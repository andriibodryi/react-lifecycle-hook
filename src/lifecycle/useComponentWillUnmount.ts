import { useEffect } from 'react';

export const useComponentWillUnmount = (cb: () => void): void => {
  useEffect(() => cb, []);
};
