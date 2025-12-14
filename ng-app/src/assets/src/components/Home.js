import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');  // アクセシビリティのために、アプリのルート要素を指定

function App() {
  const [isOpen, setIsOpen] = useState(false);

  // モーダルを開く関数
  const openModal = () => setIsOpen(true);

  // モーダルを閉じる関数
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>

      <Modal isOpen={isOpen} onRequestClose={closeModal}>
        <h2>Hello, this is a modal!</h2>
        <button onClick={closeModal}>Close Modal</button>
      </Modal>
    </div>
  );
}

export default App;
