import './App.css';
import React from 'react';
import GoogleAuthProviderWrapper from './context/GoogleAuthProvider';
import HomePage from './pages/HomePage/HomePage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import ExplorePage from './pages/ExplorePage/ExplorePage';
import { ModalProvider } from './context/ModalContext';
import { AuthProvider } from './context/AuthContext'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <GoogleAuthProviderWrapper>
          <AuthProvider>
            <ModalProvider>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/explore" element={<ExplorePage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
              </Routes>
            </ModalProvider>
          </AuthProvider>
        </GoogleAuthProviderWrapper>
      </Router>
    </div>
  );
}

export default App;
