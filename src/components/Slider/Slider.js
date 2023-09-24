import { IconButton, Box } from '@mui/material';
import { Icon } from '@iconify/react';
import s from './Slider.module.css';

const Slider = props => {
  const { sx, array, currentIndex, setCurrentIndex } = props;

  const handlePrevious = () => setCurrentIndex(index => (index + array.length - 1) % array.length);

  const handleNext = () => setCurrentIndex(index => (index + 1) % array.length);

  return (
    <Box sx={{ sx }} className={s.container}>
      <IconButton sx={{ sx }} onClick={handlePrevious} className={s.circleButton}>
        <Icon icon="iconamoon:arrow-left-2-duotone" color="var(--secondColor)" fontSize="20px" />
      </IconButton>
      {array.map((_, index) => (
        <Box key={index} className={currentIndex === index ? s.circleActive : s.circle}></Box>
      ))}
      <IconButton sx={{ sx }} onClick={handleNext} className={s.circleButton}>
        <Icon icon="iconamoon:arrow-right-2-duotone" color="var(--secondColor)" fontSize="20px" />
      </IconButton>
    </Box>
  );
};

export default Slider;
