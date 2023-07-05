import { useState, useEffect } from 'react';
import s from './Advertising.module.css';

import { images } from './images/index';

const Advertising = () => {
  const [currentImageIndex, setCurrentImage] = useState()

  const randomNumber = (Math.floor(Math.random() * images.length));


  useEffect(() => {
    const changeImageIndex = () => {
      setCurrentImage(randomNumber);
    };
    changeImageIndex();
  }, [randomNumber]);


  return (
    <div className={s.hero}>
      <img
        className={s.image}
        src={images[currentImageIndex]}
        alt="Advertising"
      />
    </div>
  );
};
export default Advertising;
