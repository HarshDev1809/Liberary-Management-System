import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import SignInPage from './pages/SignInPage/SignInPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import HomePage from './pages/HomePage/HomePage';
import LandingPage from './pages/LandingPage/LandingPage';
import NewBook from './pages/NewBook/NewBook';
import NewCustomer from './pages/NewCustomer/NewCustomer';
import Books from './pages/Books/Books';
import CustomerDetails from './pages/CustomerDetail/CustomerDetail';
import Customer from './pages/Customer/Customer';
import IssuePage from './pages/IssuePage/IssuePage';



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
        <Route path="/books" element={<Books/>}/>
        <Route path='/customers' element={<CustomerDetails />} />
        <Route path='/customers/:id' element={<Customer />} />
        <Route path="/customers/issue" element={<IssuePage />} />
      </Routes>
    </Router>
  );
}

export default App;
