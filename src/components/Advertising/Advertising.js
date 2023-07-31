import { useState, useEffect } from 'react';
import s from './Advertising.module.css';

const Advertising = ({ advertising }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomNumber = Math.floor(Math.random() * advertising.length);
      setCurrentImage(randomNumber);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={s.hero}>
      {currentImage === undefined ? (
        <span className={s.undefined}>Тут може бути ваша реклама</span>
      ) : (
        <img className={s.image} src={advertising[currentImage]} alt="Advertising" />
      )}
    </div>
  );
};
export default Advertising;
