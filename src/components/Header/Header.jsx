// import Modal from '../shared/Modal/Modal';
import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from '../Header/Header.module.scss';
import logo from '../../assets/images/logo.png'
// import Avatar from '';
// import Container from '';
import Modal from 'components/shared/Modal/Modal.jsx';

export default function Header() {
  const [modalActive, setModalActive] = useState(true);

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
        <div className="userInfo">
          <button onClick={() => setModalActive(true)}>Выйти</button>
          <Modal active={modalActive} setModalActive={setModalActive}>
            <p>Вы действительно хотите выйти?</p>
            <button>да</button>
            <button>нет</button>
          </Modal>
        </div>
      </div>
    </header>
  );
}
