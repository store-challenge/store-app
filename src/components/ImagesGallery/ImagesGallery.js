import { useState, forwardRef } from 'react';
import { CardMedia, Dialog, Zoom, Stack } from '@mui/material';
import { Icon } from '@iconify/react';

import Stepper from '../Stepper/Stepper';

import { CustomCard, CustomDialogContent, CustomIconButton } from './ImagesGallery.styled';

const Transition = forwardRef((props, reference) => <Zoom ref={reference} {...props} />);

const ImagesGallery = ({ images, breakpoint }) => {
  const [openModal, setOpenModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleOpen = index => {
    setCurrentImageIndex(index);
    setOpenModal(true);
  };

  const handleClose = () => setOpenModal(false);

  const renderStepper = () =>
    images && (
      <Stepper
        array={images}
        currentIndex={currentImageIndex}
        setCurrentIndex={setCurrentImageIndex}
        breakpoint={breakpoint}
      />
    );

  const paperPropsStyles = {
    style: {
      margin: 0,
      width: 584,
      padding: '35px',
      alignItems: 'center',
      border: '4px solid var(--mainColor)',
      borderRadius: '30px',
    },
  };

  return (
    <Stack sx={{ marginTop: breakpoint ? 6.25 : 2.5, alignItems: !breakpoint && 'center' }}>
      <CustomCard elevation={0}>
        <CardMedia
          component="img"
          height={'85%'}
          sx={{ objectFit: 'contain', cursor: 'pointer' }}
          image={images.length > 0 ? images[currentImageIndex] : ''}
          alt={`Image ${currentImageIndex + 1}`}
          onClick={() => handleOpen(currentImageIndex)}
        />
        {renderStepper()}
      </CustomCard>

      {breakpoint && (
        <Dialog
          open={openModal}
          onClose={handleClose}
          TransitionComponent={Transition}
          maxWidth="md"
          PaperProps={paperPropsStyles}>
          <CustomIconButton onClick={handleClose}>
            <Icon icon="iconamoon:close" color="var(--mainColor)" width="100%" height="100%" />
          </CustomIconButton>
          <CustomDialogContent>
            <CardMedia
              component="img"
              height={breakpoint ? 550 : 208}
              sx={{ objectFit: 'contain' }}
              image={images.length > 0 ? images[currentImageIndex] : ''}
              alt={`Image ${currentImageIndex + 1}`}
              onClick={() => handleOpen(currentImageIndex)}
            />
            {renderStepper()}
          </CustomDialogContent>
        </Dialog>
      )}
    </Stack>
  );
};

export default ImagesGallery;
