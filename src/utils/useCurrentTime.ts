import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

export const useCurrentTime = () => {
  const [ time, setTime ] = useState('');

  useEffect(() => {
    setTimeout(() => {
      const date = dayjs().format('DD/MM/YYYY HH:mm:ss');
      setTime(date);
    }, 1000);
  }, [time]);

  return {
    time
  };
};
