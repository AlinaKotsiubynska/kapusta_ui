import { Link, useHistory } from 'react-router-dom';
import { useState, useContext } from 'react';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LOGIN } from 'helpers/constants/routes.constants';
import { Context } from '../Context/index';
import { token } from '../../utils/tokenOperations';

export default function SignupForm() {
  const { setUserContext } = useContext(Context);
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      case 'name':
        return setName(value);
      default:
        return;
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const newUser = { email, password, name };

    try {
      const {
        data: { user },
      } = await axios.post('/users/signup', newUser);

      const registeredUser = {
        email: user.email,
        password: newUser.password,
      };

      const { data } = await axios.post('/users/login', registeredUser);

      localStorage.setItem('userToken', JSON.stringify(data.user.token));

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
    setName('');
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
          Имя:
          <input
            required
            placeholder="your name"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>

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

        <Link to={`${LOGIN}`}>Войти</Link>
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
}
