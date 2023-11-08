import React, { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "./useIntersectionObserver";
import { CounterType } from "../types/Counter.types";

const Counter: React.FC<CounterType> = ({ maxNumber }: CounterType) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(containerRef, {});
  const isVisible = !!entry?.isIntersecting;
  const [hasEnteredViewport, setHasEnteredViewport] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (!isVisible || hasEnteredViewport) return;
    setHasEnteredViewport(true);
    counter(0, maxNumber);
  }, [isVisible, hasEnteredViewport]);

  const counter = (minimum: number, maximum: number) => {
    for (let i = minimum; i <= maximum; i++) {
      setTimeout(() => {
        setCount(i);
      }, 100);
    }
  };
  return (
    <span
      ref={containerRef}
      className="font-texts text-2xl w-d:text-5xl w-t:text-3xl font-bold leading-4 w-p:leading-5"
    >
      {count}
    </span>
  );
};
export default Counter;
