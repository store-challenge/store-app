import { Icon } from '@iconify/react';

import { CustomMobileStepper, CustomIconButton } from './Stepper.styled';

const Stepper = props => {
  const { array, currentIndex, setCurrentIndex, breakpoint } = props;

  const handlePrevious = () => setCurrentIndex(index => (index + array.length - 1) % array.length);

  const handleNext = () => setCurrentIndex(index => (index + 1) % array.length);

  return (
    <CustomMobileStepper
      variant="dots"
      steps={array.length}
      position="static"
      activeStep={currentIndex}
      sx={{ maxWidth: 400, flexGrow: 1 }}
      nextButton={
        <CustomIconButton onClick={handleNext} disabled={array.length <= 1}>
          <Icon icon="iconamoon:arrow-right-2-duotone" color="var(--secondColor)" fontSize="20px" />
        </CustomIconButton>
      }
      backButton={
        <CustomIconButton onClick={handlePrevious} disabled={array.length <= 1}>
          <Icon icon="iconamoon:arrow-left-2-duotone" color="var(--secondColor)" fontSize="20px" />
        </CustomIconButton>
      }
    />
  );
};

export default Stepper;
