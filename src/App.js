import './App.css';
import HomePage from './pages/HomePage/HomePage';
import React from 'react';
import GoogleAuthProviderWrapper from './context/GoogleAuthProvider';
import Modal from './components/Modal/Modal';
import { ModalProvider } from './context/ModalContext';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter

function App() {

  return (
    <div className="App">
      <GoogleAuthProviderWrapper>
        <ModalProvider>
          <Router>
            <HomePage />
            <Modal />
          </Router>
        </ModalProvider>
      </GoogleAuthProviderWrapper>
    </div>
  );
}

export default App;
