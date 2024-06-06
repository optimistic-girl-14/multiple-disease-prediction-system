import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import About from './Components/About/About';
import Signup from './Pages/Signup';
import Login from './Pages/LoginSignup'; // Corrected the import path
import Medical from './Pages/Medical'; // Corrected the import path
import Articles from './Components/Articles/Articles';

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* Only render the Navbar if the current path does not start with "/medical" */}
        {window.location.pathname !== '/medical' && <Navbar />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path="/medical/*" element={<Medical />} />

          <Route path='/articles' element={<Articles />} />
          <Route path='/register' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;