import { toast, Slide } from 'react-toastify';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Notification = () => {
  toast.success(`Товар доданий в кошик!`, {
    transition: Slide,
    autoClose: 1500,
    hideProgressBar: true,
    style: {
      backgroundColor: 'var(--secondColor)',
      color: 'var(--mainColor)',
    },
    icon: <CheckCircleIcon color={'var(--mainColor)'} />,
  });
};

export default Notification;
