import './App.css';
import HomePage from './pages/HomePage/HomePage';
import GoogleAuthProviderWrapper from './context/GoogleAuthProvider';

function App() {
  return (
    <div className="App">
      <GoogleAuthProviderWrapper>
        <HomePage />
      </GoogleAuthProviderWrapper>
    </div>
  );
}

export default App;
