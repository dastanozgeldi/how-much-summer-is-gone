"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [day, setDay] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const calculateDays = () => {
    const currentDate = new Date();
    const lastDayOfSummer = new Date("August 31, 2023 23:59:59");

    const leftDay = lastDayOfSummer.getDate() - currentDate.getDate();
    const leftHours = lastDayOfSummer.getHours() - currentDate.getHours();
    const leftMinutes = lastDayOfSummer.getMinutes() - currentDate.getMinutes();
    const leftSeconds = lastDayOfSummer.getSeconds() - currentDate.getSeconds();

    setDay(leftDay);
    setHours(leftHours);
    setMinutes(leftMinutes);
    setSeconds(leftSeconds);
  };

  useEffect(() => {
    calculateDays();
    const interval = setInterval(calculateDays, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-[1280px] mx-auto p-[2rem] text-center space-y-3">
      <div className="flex gap-5 justify-center items-end">
        <div className="block">
          <h1 className="font-extrabold text-6xl">{day}</h1>
          <span className="text-3xl">days</span>
        </div>
        <div className="block">
          <h1 className="font-extrabold text-5xl">{hours}</h1>
          <span className="text-2xl">hours</span>
        </div>
        <div className="block">
          <h1 className="font-extrabold text-4xl">{minutes}</h1>
          <span className="text-xl">minutes</span>
        </div>
        <div className="block">
          <h1 className="font-extrabold text-3xl">{seconds}</h1>
          <span className="text-lg">seconds</span>
        </div>
      </div>
      <h2 className="text-xl opacity-75">till school</h2>
    </div>
  );
}
