// import Modal from '../shared/Modal/Modal';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { Avatar } from 'components/Avatar';
// import Container from '';
import Modal from 'components/shared/Modal/Modal.jsx';
import axios from 'axios';
import { token } from 'utils';
import { USER_CONTEXT_DEFAULT } from 'helpers/constants/contexst.constants';
import { Context } from 'components/Context';
import s from '../Header/Header.module.scss';
import logo from '../../assets/images/logo.png';

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
    <header className={s.header}>
      <div className={s.headerContainer}>
        <Link to="/home" aria-label="logo">
          <div>
            <img
              className={s.logoLink}
              src={logo}
              alt="logo"
              width="90"
              height="31"
            />
          </div>
        </Link>
        {authenticated && (
          <div className={s.userInfo}>
            <Avatar name={user?.name} />
            <button className="logoutBtn" onClick={openModal} type="button">
              Выйти
            </button>
            {modalActive && (
              <Modal
                active={modalActive}
                setModalActive={setModalActive}
                onSubmitClick={handleLogout}
                onCanselCLick={closeModal}
              >
                <p className={s.modalText}>Вы действительно хотите выйти?</p>
              </Modal>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
