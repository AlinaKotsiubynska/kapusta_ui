import { Link, useHistory } from 'react-router-dom';
import { useState, useContext } from 'react';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SIGNUP } from 'helpers/constants/routes.constants';
import { Context } from '../Context/index';
import { token } from '../../utils/tokenOperations';
import s from '../LoginForm/LoginForm.module.scss';
import logo from '../../assets/icons/google-symbol.svg';

export default function LoginForm() {
  const { setUserContext } = useContext(Context);
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const user = { email, password };

    try {
      const { data } = await axios.post('/users/login', user);
      localStorage.setItem('token', JSON.stringify(data.user.token));
      token.set(data.user.token);
      const { data: userInfo } = await axios.get('/users/current');

      setUserContext(state => ({
        ...state,

        token: data.user.token,
        authenticated: true,
        user: {
          ...state.user,
          balance: userInfo.user.balance,
          name: userInfo.user.name,
        },
      }));
      history.push('/home/expenses');
    } catch (error) {
      toast.error('Проверьте правильность введенных данных');
    }

    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.wrapper}>
      <ToastContainer autoClose={5000} />
      <p className={s.loginForm_text}>
        Вы можете авторизоваться с помощью Google Account:
      </p>
      <div className={s.google_wrapper}>
        <img src={logo} alt="gg" width="18px" height="18px" />
        <a
          href="https://app-kapusta.herokuapp.com/api/auth/google"
          className={s.google_text}
        >
          Google
        </a>
      </div>

      <p className={s.loginForm_text}>
        Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:
      </p>

      <form className={s.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={s.label}>
          <p className={s.desc}> Электронная почта:</p>
          <input
            className={s.input}
            required
            placeholder="your@email.com"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={s.label}>
          <p className={s.desc}> Пароль</p>
          <input
            placeholder="пароль"
            className={s.input}
            required
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <div className={s.btn_wrapper}>
          <button className={s.button} type="submit">
            Войти
          </button>
          <button className={s.button}>
            <Link
              style={{
                textDecoration: 'none',
                color: '#52555f',
                fontWeight: '700',
                fontSize: '12px',
              }}
              to={`${SIGNUP}`}
            >
              Регистрация
            </Link>
          </button>
        </div>
      </form>
    </div>
  );
}
