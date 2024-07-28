import { useState, useEffect } from 'react';

export default function LiveTime ()  {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date) => {
    const timeOptions: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    };

    const dateOptions: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      day: 'numeric',
      month: 'short',
      year: '2-digit',
    };

    const timeFormatter = new Intl.DateTimeFormat('en-US', timeOptions);
    const dateFormatter = new Intl.DateTimeFormat('en-US', dateOptions);

    const formattedTime = timeFormatter.format(date);
    const formattedDate = dateFormatter.format(date);

    return `${formattedTime} - ${formattedDate}`;
  };

  return (
    <div>
      <span className="date-time">{formatTime(currentTime)}</span>
    </div>
  );
};