import { useEffect, useRef, useState } from 'react';
import { Pagination } from '@/core/types';

type Args = {
  nextPage: Pagination['nextPage'];
  asyncCallback: () => Promise<void>;
  isLoading: boolean;
};

export function useInfiniteScroll({ nextPage, asyncCallback, isLoading }: Args) {
  const observerRef = useRef<HTMLDivElement | null>(null);

  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!observerRef.current || !nextPage || isLoading) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { threshold: 1.0 }
    );

    observer.observe(observerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [nextPage, isLoading]);

  useEffect(() => {
    if (isIntersecting && nextPage && !isLoading) {
      asyncCallback();
    }
  }, [isIntersecting]);

  return { observerRef };
}
