import s from '../Hero/Hero.module.scss';
import LoginForm from '../LoginForm/LoginForm';

export const Hero = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.titleWrapper}>
        <h1 className={s.title}>Kapu$ta</h1>
        <p className={s.desc}>Smart Finance</p>
      </div>

      <LoginForm />
    </div>
  );
};
