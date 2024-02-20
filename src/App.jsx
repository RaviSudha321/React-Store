import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Shop from './Pages/Shop/Shop';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Login/Login';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import SingleProduct from './Pages/SingleProduct/SingleProduct';
import NotFound from './Pages/NotFound/NotFound';
import ProductCategoryArchive from './Pages/ProductCategoryArchive/ProductCategoryArchive';
import Cart from './Pages/Cart/Cart';



function App() {

  return (
    <div className='main'>
      <Header />
      <div className='site-content'>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/product-category/:slug" element={<ProductCategoryArchive />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/*" element={<NotFound />}></Route>
        </Routes> 
      </div>
      <Footer />
    </div>
  )
}

export default App
