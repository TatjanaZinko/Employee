import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PrivateRoutes from './components/PrivateRoutes ';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes/>}>
            <Route path="/" element={<HomePage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
    </BrowserRouter>
  );
} 

export default App;