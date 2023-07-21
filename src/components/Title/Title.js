import s from './Title.module.css';

const Title = ({ text }) => (
  <div className={s.title}>
    <h3>{text}</h3>
  </div>
);

export default Title;
