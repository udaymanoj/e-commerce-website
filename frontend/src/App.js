
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './components/pages/ShopCategory';
import Product from './components/pages/Product';
import LoginSign from './components/pages/LoginSign';
import Cart from './components/pages/Cart';
import Home from './components/pages/Home';
import banner_mens from './components/Assests/banner_mens.png';
import banner_women from './components/Assests/banner_women.png';
import banner_kids from './components/Assests/banner_kids.png';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Mens' element={<ShopCategory banner={banner_mens} category='men'/>}/>
        <Route path='/Womens' element={<ShopCategory banner={banner_women} category='women'/>}/>
        <Route path='/Kids' element={<ShopCategory banner={banner_kids} category='kid'/>}/>
       <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSign/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
