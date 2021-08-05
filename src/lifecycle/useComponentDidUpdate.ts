import { useEffect, useRef } from 'react';

export function useComponentDidUpdate<T>(
  cb: (prevProps: T) => void,
  nextProps: T,
): void {
  const didMount = useRef(false);
  const prevProps = useRef<T>(nextProps);
  useEffect(() => {
    if (didMount.current) {
      cb(prevProps.current);
      prevProps.current = nextProps;
    } else {
      didMount.current = true;
    }
  });
}
