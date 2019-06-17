import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({children, onClose, open}) =>
  open
    ? ReactDOM.createPortal(
        <div className="modal">
          <div className="modal-close" onClick={onClose}>
            <button>&#10006;</button>
          </div>
          {children}
        </div>,
        document.body
      )
    : null;

export default Modal;
