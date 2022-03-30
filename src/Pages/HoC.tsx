import React, { ComponentType, useCallback, useEffect, useState } from "react";

export function withTimer<T>(Component: ComponentType<T>) {
  return (hocProps: Omit<T, "count" | "startTimer" | "endTimer">) => {
    const [count, setCount] = useState(0);
    const [timer, setTimer] = useState(-1);

    const startTimer = useCallback(() => {
      const timer = window.setInterval(() => {
        setCount((previous) => previous + 1);
      }, 1000); 

      setTimer(timer);
    }, []);

    const endTimer = useCallback(() => {
      clearInterval(timer);
      setCount(0);
    }, [timer]);

    useEffect(() => {
        console.log("HoC Mounted");
        return () => {
          console.log("HoC Unmounted");
        //   clearInterval(timer);
        };
      },[]);
    
    return (
      <Component
        {...(hocProps as T)}
        startTimer={startTimer}
        endTimer={endTimer}
        count={count}
      ></Component>
    );
  };
}

type PropType = {
  name: string;
};
export const Sample1 = ({ name }: PropType) => {
  return <div>Hello {name}</div>;
};

const Sample = ({
  count,
  startTimer,
  endTimer,
}: {
  count: number;
  startTimer: () => void;
  endTimer: () => void;
}) => {
  useEffect(() => {
    startTimer();
  }, [startTimer]);

  useEffect(() => {
    if (count === 10) {
      endTimer();
    }
  }, [count, endTimer]);

  useEffect(() => {
    console.log("Sample Mounted");
    return () => {
      console.log("Sample Unmounted");
      endTimer();
    };
  },[endTimer]);

  return <p>{count}</p>;
};
export const SampleWithTimer = withTimer(Sample);

export const HoCExample = () => {
  return <SampleWithTimer></SampleWithTimer>;
};
