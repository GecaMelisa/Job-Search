import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';

type CountdownTimerProps = {
  deadline: string;
};

const CountdownTimer: React.FC<CountdownTimerProps> = ({ deadline }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(deadline) - +new Date();
    let timeLeft: { [key: string]: number } = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <Typography variant="body2" className="countdown-timer">
      {days > 0 && `${days}d `}
      {days > 0 || hours > 0 ? `${hours}h ` : ''}
      {days > 0 || hours > 0 || minutes > 0 ? `${minutes}m ` : ''}
      {`${seconds}s left`}
    </Typography>
  );
};

export default CountdownTimer;
