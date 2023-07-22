import Box from '@/components/layout/Box';
import { FC, useEffect, useState } from 'react';

interface TimerProps {
  finishedAt: Date;
}

const Timer: FC<TimerProps> = ({
  finishedAt,
}) => {
  const [time, setTime] = useState<string>('00:00:00');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const finishedAtDate = new Date(finishedAt);
      const diff = finishedAtDate?.getTime() - now.getTime();
      const hours = Math.floor(diff / 1000 / 60 / 60);
      const minutes = Math.floor(diff / 1000 / 60) % 60;
      const seconds = Math.floor(diff / 1000) % 60;

      setTime(`${hours}:${minutes}:${seconds}`);
    }, 1000);

    return () => clearInterval(interval);
  }, [finishedAt]);



  return (
    <Box>
      {
        time
      }
    </Box>
  );
}

export default Timer;