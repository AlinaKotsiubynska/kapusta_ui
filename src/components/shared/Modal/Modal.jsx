import { useRef, useEffect } from 'react';
import s from '../Modal/Modal.module.scss';

function Modal({ active, setActive, children, onSubmitClick, onCanselCLick }) {
  const modalRef = useRef(null);
  const backdropRef = useRef(null);

  const closeModal = e => {
    if (e.target === backdropRef.current) {
      onCanselCLick();
    }
  };
  useEffect(() => {
    modalRef.current = document.querySelector('#modal-logout');
    backdropRef.current = document.querySelector('#modal-backdrop');
  }, []);
  return (
    <div id={'modal-backdrop'} className={s.overlay} onClick={closeModal}>
      <div
        id={'modal-logout'}
        className={active ? [s.modal, s.active].join(' ') : s.modal}
      >
        <div
          className={
            active
              ? [s['modal-content'], s.active].join(' ')
              : s['modal-content']
          }
        >
          {children}
          <div className={s.modalBtns}>
            <button className={s.button} onClick={onSubmitClick}>
              да
            </button>
            <button className={s.button} onClick={onCanselCLick}>
              нет
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
