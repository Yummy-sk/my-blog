import { useRef, useCallback } from 'react';

interface UseDebounceProps<T> {
  callback: (...args: Array<T>) => void;
  delay: number;
}

export function useDebounce<T>({ callback, delay }: UseDebounceProps<T>) {
  const timeout = useRef<NodeJS.Timeout>();

  return useCallback(
    (args: T) => {
      const later = () => {
        clearTimeout(timeout.current);
        callback(args);
      };

      clearTimeout(timeout.current);
      timeout.current = setTimeout(later, delay);
    },
    [callback, delay],
  );
}
