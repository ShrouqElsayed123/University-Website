import { useEffect, useState } from "react";

function getTimeLeft(targetDate) {
  const total = Date.parse(targetDate) - Date.now();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { total, days, hours, minutes, seconds };
}

export default function Countdown() {
  const targetDate = new Date("2027-06-10T00:00:00");
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // eslint-disable-next-line react/prop-types
  const Box = ({ value, label }) => (
    <div className="text-center">
      <div className="text-4xl font-bold">{String(value).padStart(2, "0")}</div>
      <div className="text-sm text-gray-300">{label}</div>
    </div>
  );

  return (
    <div className="flex items-center justify-center gap-2 md:gap-6 mt-4">
      <Box value={timeLeft.days} label="Days" />
      <span className="text-2xl font-bold">:</span>
      <Box value={timeLeft.hours} label="Hours" />
      <span className="text-2xl font-bold">:</span>
      <Box value={timeLeft.minutes} label="Minutes" />
      <span className="text-2xl font-bold">:</span>
      <Box value={timeLeft.seconds} label="Seconds" />
    </div>
  );
}