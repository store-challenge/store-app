import { useState, forwardRef } from 'react';
import { Card, CardMedia, CardContent, Dialog, Box, DialogContent, IconButton, Zoom, Stack } from '@mui/material';
import { Icon } from '@iconify/react';

import Slider from '../Slider/Slider';

import s from './ImagesGallery.module.css';

const Transition = forwardRef((props, reference) => <Zoom ref={reference} {...props} />);

const ImagesGallery = ({ images, breakpoint }) => {
  const [openModal, setOpenModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleOpen = index => {
    setCurrentImageIndex(index);
    setOpenModal(true);
  };

  const handleClose = () => setOpenModal(false);

  const renderSlider = () =>
    images && <Slider array={images} currentIndex={currentImageIndex} setCurrentIndex={setCurrentImageIndex} />;

  const paperPropsStyles = {
    style: {
      width: breakpoint ? 614 : 280,
      height: breakpoint ? 636 : 280,
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      border: '4px solid var(--mainColor)',
      borderRadius: '30px',
    },
  };

  return (
    <Stack sx={{ marginTop: breakpoint ? 6.25 : 2.5, alignItems: !breakpoint && 'center' }}>
      <Card sx={{ width: breakpoint ? 310 : 132, height: breakpoint ? 322 : 138 }} className={s.card} elevation={0}>
        <CardMedia
          component="img"
          height={breakpoint ? 265 : 132}
          sx={{ objectFit: 'contain' }}
          image={images.length > 0 ? images[currentImageIndex] : ''}
          alt={`Image ${currentImageIndex + 1}`}
          onClick={() => handleOpen(currentImageIndex)}
        />
        {breakpoint && renderSlider()}
      </Card>
      {!breakpoint && renderSlider()}

      <Dialog
        open={openModal}
        onClose={handleClose}
        TransitionComponent={Transition}
        maxWidth="md"
        fullWidth
        // scroll="body"
        PaperProps={paperPropsStyles}>
        <DialogContent
          sx={{
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {breakpoint && (
            <IconButton onClick={handleClose} className={s.buttonClose}>
              <Icon icon="iconamoon:close" color="var(--mainColor)" width="100%" height="100%" />
            </IconButton>
          )}
          <CardMedia
            component="img"
            height={breakpoint ? 567 : 208}
            image={images.length > 0 ? images[currentImageIndex] : ''}
            alt={`Image ${currentImageIndex + 1}`}
            onClick={() => handleOpen(currentImageIndex)}
          />
          {breakpoint && renderSlider()}
        </DialogContent>
        {!breakpoint && renderSlider()}
      </Dialog>
    </Stack>
  );
};

export default ImagesGallery;
