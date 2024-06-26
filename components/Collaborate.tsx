import Image from 'next/image';
import { useState, useEffect } from 'react';

export const Collaborate = () => {
  const getTimeInBucharest = () => {
    return Intl.DateTimeFormat('ro-RO', {
      hour: 'numeric',
      minute: 'numeric',
      timeZone: 'Europe/Bucharest'
    }).format();
  };

  const [time, setTime] = useState(getTimeInBucharest());

  useEffect(() => {
    const intervalID = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(intervalID);
    };
  });

  const tick = () => {
    setTime(getTimeInBucharest());
  };

  return (
    <div className="flex flex-wrap items-center">
      <p className="text-base md:text-xl text-center w-full">Let's build something together!</p>
      <div className="w-1/3 md:w-2/6 justify-center items-center">
        <Image className="h-16 w-auto mx-auto" src="/img/globe.gif" alt="globe image" width="64" height="64" />
      </div>
      <div className="w-2/3 md:w-4/6 my-2">
        <p className="my-2 text-sm text-left md:text-left">
          I'm open to freelance jobs, collaboration with companies, startups, and brands.
        </p>
      </div>
      <div className="flex flex-col text-center w-full">
        <p className="text-xs md:text-sm">Current time in Bucharest: {time}</p>
        <a className="cursor-pointer text-xs md:text-sm text-blue-600" href="mailto:bogdan.mosteanu@hey.com" target="_blank" rel="noopener noreferrer">bogdan.mosteanu@hey.com</a>
      </div>
    </div>
  );
}
