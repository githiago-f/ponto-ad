import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

export const useCurrentTime = () => {
  const [ currentTime, setTime ] = useState(dayjs().format('DD/MM/YYYY HH:mm:ss'));

  useEffect(() => {
    setInterval(() => {
      const formattedDate = dayjs()
        .format('DD/MM/YYYY HH:mm:ss');
      setTime(formattedDate);
    }, 1000);
  }, []);

  return {
    currentTime
  };
};
