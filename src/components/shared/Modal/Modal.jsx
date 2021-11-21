import React from 'react';

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
        <button onClick={onSubmitClick}>да</button>
        <button onClick={onCanselCLick}>нет</button>
      </div>
    </div>
  );
}

export default Modal;
