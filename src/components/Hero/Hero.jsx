import s from '../Hero/Hero.module.scss';

export const Hero = () => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Kapu$ta</h1>
      <p className={s.desc}>Smart Finance</p>
    </div>
  );
};
