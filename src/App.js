import './App.css';
import HomePage from './pages/HomePage/HomePage';
import React from 'react';
import GoogleAuthProviderWrapper from './context/GoogleAuthProvider';
import Modal from './components/Modal/Modal';
import { ModalProvider } from './context/ModalContext';

function App() {

  return (
    <div className="App">
      <GoogleAuthProviderWrapper>
        <ModalProvider>
          <HomePage />
          <Modal />
        </ModalProvider>
      </GoogleAuthProviderWrapper>

    </div>
  );
}

export default App;
