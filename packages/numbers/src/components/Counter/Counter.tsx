import { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "../Hooks/useIntersectionObserver";

const Counter = ({ maxNumber }: any) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(containerRef, {});
  const isVisible = !!entry?.isIntersecting;
  const [hasEnteredViewport, setHasEnteredViewport] = useState(false);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (!isVisible || hasEnteredViewport) return;
    setHasEnteredViewport(true);
    counter(0, maxNumber);
  }, [isVisible, hasEnteredViewport]);

  const counter = (minimum: any, maximum: any) => {
    for (let i = minimum; i <= maximum; i++) {
      setTimeout(() => {
        setCount(i);
      }, 100);
    }
  };
  return (
    <span
      ref={containerRef}
      className="font-secondary text-2xl lg:text-5xl md:text-3xl font-bold leading-[0] "
    >
      {count}
    </span>
  );
};
export default Counter;
