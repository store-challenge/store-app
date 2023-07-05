import { useState, useEffect } from 'react';
import s from './Advertising.module.css';

import { advertising } from '../../data/images/index';

const Advertising = () => {
  const [currentImageIndex, setCurrentImage] = useState()

  useEffect(() => {
    const randomNumber = (Math.floor(Math.random() *
  images.length));
      setCurrentImage(randomNumber);
  }, []);

  return (
    <div className={s.hero}>
      <img
        className={s.image}
        src={advertising[currentImageIndex]}
        alt="Advertising"
      />
    </div>
  );
};
export default Advertising;
