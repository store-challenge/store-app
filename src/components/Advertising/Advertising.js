import { useState, useEffect } from 'react';
import s from './Advertising.module.css';

import { advertising } from '../../data/images/index';

const Advertising = () => {
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
      {currentImage !== undefined && (
        <img
          className={s.image}
          src={advertising[currentImage]}
          alt="Advertising"
        />
      )}
    </div>
  );
};
export default Advertising;
