// import Modal from '../shared/Modal/Modal';
import React from 'react';
import { useState } from 'react';
// import Avatar from '';
// import Container from '';
import Modal from 'components/shared/Modal/Modal.jsx';

export default function Header() {
  const [modalActive, setModalActive] = useState(true);

  return (
    <header className="header">
      <div>
        <div>
          <h1 className="title">Kapu$ta</h1>
        </div>
        <div className="userInfo">
          <button onClick={() => setModalActive(true)}>Выйти</button>
          <Modal active={modalActive} setModalActive={setModalActive}>
            <p>Хотите выйти ?</p>
            <button>да</button>
            <button>нет</button>
          </Modal>
        </div>
      </div>
    </header>
  );
}
