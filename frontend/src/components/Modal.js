import React from 'react';
import Modal from 'react-modal';

import { Form } from './Form';

Modal.setAppElement('#app');

export function ModalPopUp({ isOpen, onRequestClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modal"
      style={{
        content: {
          position: 'fixed',
          top: '10%',
          left: '20%',
          right: '20%',
          bottom: '20%',
          padding: '20px 20px 0px 20px',
          borderRadius: '15px',
          backgroundColor: '#F9F9F9'
        }
      }}
    >
      <button type="button" className="pure-button" onClick={onRequestClose}>
        Close
      </button>

      <Form />
    </Modal>
  );
}
