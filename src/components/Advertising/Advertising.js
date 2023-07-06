import { useState, useEffect } from 'react';
import s from './Advertising.module.css';

import { images } from '../../data/images/index';

const Advertising = () => {
  const [currentImage, setCurrentImage] = useState()

  useEffect(() => {
    const randomNumber = (Math.floor(Math.random() * images.length));
    setCurrentImage(randomNumber);
  }, []);

  return (
    <div className={s.hero}>
      <img
        className={s.image}
        src={images[currentImage]}
        alt="Advertising"
      />
    </div>
  );
};
export default Advertising;
