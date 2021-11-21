// import Modal from '../shared/Modal/Modal';
import { useState, useContext } from 'react';
import { Avatar } from 'components/Avatar';
// import Container from '';
import Modal from 'components/shared/Modal/Modal.jsx';
import axios from 'axios';
import { token } from 'utils';
import { USER_CONTEXT_DEFAULT } from 'helpers/constants/contexst.constants';
import { Context } from 'components/Context';
import { NavLink } from 'react-router-dom';
import s from '../Header/Header.module.scss';
import logo from '../../assets/images/logo.png'


export default function Header() {
  const [modalActive, setModalActive] = useState(false);
  const {
    userContext: { authenticated, user },
    setUserContext,
  } = useContext(Context);

  const openModal = () => {
    setModalActive(true);
  };

  const closeModal = () => {
    setModalActive(false);
  };

  const handleLogout = async () => {
    await axios.post('/users/logout');
    token.unset();
    localStorage.removeItem('token');
    closeModal();
    setUserContext(state => {
      return {
        ...state,
        ...USER_CONTEXT_DEFAULT,
      };
    });
  };
  return (
    <header className="header">
      <div>
        <NavLink className={s.logoLink} to="/">
				<div><img src={logo} alt="logo"/></div>
			</NavLink>
        <div>
          <h1 className="title">Kapu$ta</h1>
          <p className="desc">Smart Finance</p>
        </div>
        {authenticated && (
          <div className="userInfo">
            <Avatar name={user?.name} />
            <button onClick={openModal}>Выйти</button>
            {modalActive && (
              <Modal
                active={modalActive}
                setModalActive={setModalActive}
                onSubmitClick={handleLogout}
                onCanselCLick={closeModal}
              >
                <p>Вы действительно хотите выйти?</p>
              </Modal>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
