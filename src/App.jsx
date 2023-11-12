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

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   alert('Form submitted:', formData);
   setFormData({})
  };

  const handleModal = () => {
    setIsModal(true);
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
          />
        </LocationProvider>

        <Routes>
          <Route path='/' element={<Products cart={cart} setCart={setCart} />} />
          <Route path='/products/:id' element={<ProductDetail />} />
          <Route path='/register' element={<Register 
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          />} />
          <Route path='/login' element={<Login 
            formData={formData}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
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
