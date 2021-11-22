import React from 'react';
import s from '../Modal/Modal.module.scss';

function Modal({ active, setActive, children, onSubmitClick, onCanselCLick }) {
  return (
    <div
      className={active ? 'modal active' : 'modal'}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? 'modal-content active' : 'modal-content'}
        onClick={e => e.stopPropagation()}
      >
        {children}
        <button className={s.modalBtnYes} onClick={onSubmitClick}>
          да
        </button>
        <button className={s.modalBtnNo} onClick={onCanselCLick}>
          нет
        </button>
      </div>
    </div>
  );
}

export default Modal;
