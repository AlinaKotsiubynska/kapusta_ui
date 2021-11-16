import { Link, useHistory } from 'react-router-dom';
import { useState, useContext } from 'react';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SIGNUP } from 'helpers/constants/routes.constants';
import { Context } from '../Context/index';
import { token } from '../../utils/tokenOperations';

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

      setUserContext(state => ({
        ...state,

        token: data.user.token,
        authenticated: true,
        user: {
          ...state.user,
          balance: data.user.balance,
          name: data.user.name,
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
    <div>
      <ToastContainer autoClose={5000} />
      <p>Вы можете авторизоваться с помощью Google Account:</p>

      <a href="https://app-kapusta.herokuapp.com/api/auth/google">Google</a>
      <p>
        Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:
      </p>

      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Электронная почта:
          <input
            required
            placeholder="your@email.com"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label>
          Пароль
          <input
            required
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Войти</button>
        <Link to={`${SIGNUP}`}>Регистрация</Link>
      </form>
    </div>
  );
}
