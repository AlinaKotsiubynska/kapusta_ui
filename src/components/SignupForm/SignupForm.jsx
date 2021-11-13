import { Link, useHistory } from 'react-router-dom';
import { useState, useContext } from 'react';
import axios from 'axios';
import { LOGIN } from 'helpers/constants/routes.constants';
import { Context } from '../Context/index';

axios.defaults.baseURL = 'http://app-kapusta.herokuapp.com/api';
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
};
export default function SignupForm() {
  const { setUserContext } = useContext(Context);

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
  const history = useHistory();

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

      token.set(data.user.token);

      setUserContext(state => ({
        ...state,

        token: data.user.token,
        authenticated: true,
        user: {
          name: newUser.name,
        },
      }));

      history.push('/home/expenses');
    } catch (error) {
      console.log(error);
    }

    setEmail('');
    setPassword('');
    setName('');
  };

  return (
    <div>
      <p>Вы можете авторизоваться с помощью Google Account:</p>
      <button type="button">Google</button>
      <p>
        Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:
      </p>

      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Имя:
          <input
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