import { useState, useEffect } from 'react';
import s from './Advertising.module.css';

import { advertising } from '../../data/images/index';

const Advertising = () => {
  const [currentImage, setCurrentImage] = useState()

  useEffect(() => {
    const randomNumber = (Math.floor(Math.random() * advertising.length));
    setCurrentImage(randomNumber);
  }, []);

  return (
    <div className={s.hero}>
      <img
        className={s.image}
        src={advertising[currentImage]}
        alt="Advertising"
      />
    </div>
  );
};
export default Advertising;
