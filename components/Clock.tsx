'use client';

import { useState, useEffect } from 'react';

export const Clock = () => {
  const [time, setTime] = useState(() => '-');

  useEffect(() => {
    const intervalID = setInterval(() => updateTime(), 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  const updateTime = () => {
    setTime(new Date().toLocaleTimeString("en-US"));
  };

  return <span>{time}</span>;
}