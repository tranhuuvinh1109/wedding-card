import { useEffect, useState, useMemo } from 'react';
import moment from 'moment';

const Poster = () => {
  const [countdown, setCountdown] = useState('');

  const renderCountDown = useMemo(() => {
    return (
      <div className="flex justify-center items-center">
        <div className="w-[74px] h-[74px] bg-pink-600 rounded-full flex justify-center items-center  font-semibold">
          <div className="text-center">
            <h1 className="m-0 text-lg">{countdown.split(':')[0]}</h1>
            <h2 className="m-0 text-sm">Days</h2>
          </div>
        </div>
        <div className="w-[74px] h-[74px] bg-pink-600 rounded-full flex justify-center items-center  font-semibold ml-4">
          <div className="text-center">
            <h1 className="m-0 text-lg">{countdown.split(':')[1]}</h1>
            <h2 className="m-0 text-sm">Hours</h2>
          </div>
        </div>
        <div className="w-[74px] h-[74px] bg-pink-600 rounded-full flex justify-center items-center  font-semibold ml-4">
          {' '}
          <div className="text-center">
            <h1 className="m-0 text-lg">{countdown.split(':')[2]}</h1>
            <h2 className="m-0 text-sm">Minutes</h2>
          </div>
        </div>
        <div className="w-[74px] h-[74px] bg-pink-600 rounded-full flex justify-center items-center  font-semibold ml-4">
          <div className="text-center">
            <h1 className="m-0 text-lg">{countdown.split(':')[3]}</h1>
            <h2 className="m-0 text-sm">Seconds</h2>
          </div>
        </div>
      </div>
    );
  }, [countdown]);
  useEffect(() => {
    const endDate = moment('2023-12-24-09:00', 'YYYY-MM-DD-HH:mm');

    const calculateCountdown = () => {
      const now = moment();
      const duration = moment.duration(endDate.diff(now));

      const days = Math.floor(duration.asDays());
      const hours = duration.hours();
      const minutes = duration.minutes();
      const seconds = duration.seconds();

      setCountdown(`${days}:${hours}:${minutes}:${seconds}`);
    };

    calculateCountdown();

    const intervalId = setInterval(calculateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="overflow-hidden  relative text-white text-center">
      <img src="https://demos.freehtml5.co/wedding/images/img_bg_2.jpg" alt="wedding" className="w-full" />
      <div
        className="absolute z-10 top-[50%] left-[50%] w-full bg-slate-700 py-[500px]"
        style={{
          transform: 'translate(-50%, -50%)',
          background: 'linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73))',
        }}
      >
        <h1 className="flex justify-center items-center text-4xl mb-4 font-semibold tracking-widest font-ballet">
          Nhật Tân - Thảo Nguyên
        </h1>
        <h1 className="text-2xl font-semibold text-white mb-2">-We Are Getting Married-</h1>
        <div>
          <p>{renderCountDown}</p>
        </div>
      </div>
    </div>
  );
};

export default Poster;
