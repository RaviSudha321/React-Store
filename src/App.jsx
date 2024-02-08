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

function App() {

  return (
    <div className='main'>
      <Header />
      <div className='site-content'>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/shop" element={<Shop />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/login" element={<Login />}></Route>
        </Routes> 
      </div>
      <Footer />
    </div>
  )
}

export default App
