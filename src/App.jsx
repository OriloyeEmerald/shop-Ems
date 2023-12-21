import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/header';
import Products from './pages/Products';
import ProductDetail from './pages/productDetail';
import Register from './pages/register';
import Login from './pages/login';

function App() {
  const [cart, setCart] = useState([]);
  const [isModal, setIsModal] = useState(true); 
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === 'repeatPassword') {
      setPasswordsMatch(formData.password === value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isRegisterPage = window.location.pathname === '/register'; 
  
    if (isRegisterPage && formData.password !== formData.repeatPassword) {
      
      setPasswordsMatch(false);
      alert('Passwords do not match');
      return; 
    }
  
   
    alert('Form submitted:', formData);
    setFormData({
      password: '',
      repeatPassword: '',
    });
    setPasswordsMatch(true);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      repeatPassword: '',
    })
  };
  
   

  const handleModal = () => {
    setIsModal(false);
  };

  return (
    <>
      <Router>
        <LocationProvider>
          <Header
            cart={cart}
            handleModal={handleModal}
            isModal={isModal}
            setIsModal={setIsModal}
            setCart={setCart}
            isAuthenticated={isAuthenticated}
             handleLogin={handleLogin}
            handleLogout={handleLogout}
          />
        </LocationProvider>

        <Routes>
          <Route path='/' element={<Products cart={cart} 
          setCart={setCart}
          isAuthenticated={isAuthenticated} />} />
          <Route path='/products/:id' element={<ProductDetail />} />
          <Route path='/register' element={<Register 
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          passwordsMatch={passwordsMatch}
          />} />
          <Route path='/login' element={<Login 
            formData={formData}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            handleLogin={handleLogin}
           
          />} />

        </Routes>
      </Router>
    </>
  );
}


function LocationProvider({ children }) {
  const location = useLocation();
  const shouldRenderHeader = !['/login', '/register'].includes(location.pathname);

  return shouldRenderHeader ? children : null;
}

export default App;
