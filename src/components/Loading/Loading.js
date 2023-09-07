import s from './Loading.module.css';

const Loading = () => (
  <div className={s.container}>
    {Array.from({ length: 3 }).map((_, index) => (
      <div key={index} className={s.element}></div>
    ))}
  </div>
);

export default Loading;
