import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import ExplorePage from './pages/ExplorePage/ExplorePage';
import Modal from './components/Modal/Modal';
import GoogleAuthProviderWrapper from './context/GoogleAuthProvider';
import { ModalProvider } from './context/ModalContext';
import DashboardPage from './pages/DashboardPage/DashboardPage';

function App() {
  return (
    <Router>
      <GoogleAuthProviderWrapper>
        <ModalProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
          <Modal />
        </ModalProvider>
      </GoogleAuthProviderWrapper>
    </Router>
  );
}

export default App;
