import React from 'react'
    import { useEffect, useState } from 'react';



function CycleNames({ names }: { names: string[] }) {
  const twelveHoursInMs = 12 * 60 * 60 * 1000; // twelve hours in milliseconds
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(currentIndex => (currentIndex + 1) % names.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [names.length, twelveHoursInMs]);

  return <div className='name'>{names[currentIndex]}</div>
}
export default CycleNames

