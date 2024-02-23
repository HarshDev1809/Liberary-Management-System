import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import SignInPage from './pages/SignInPage/SignInPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import HomePage from './pages/HomePage/HomePage';
import LandingPage from './pages/LandingPage/LandingPage';
import NewBook from './pages/NewBook/NewBook';
import NewCustomer from './pages/NewCustomer/NewCustomer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignInPage/>} />
        <Route path='/signup' element={<SignUpPage/>} />
        <Route exact path='/' element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path='/create/book' element={<NewBook />} />
        <Route path='/create/customer' element={<NewCustomer />} />
      </Routes>
    </Router>
  );
}

export default App;
