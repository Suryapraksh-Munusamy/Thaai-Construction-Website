import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Fooder';
import NavBar from './Components/NavBar';
import ScrollSocialButtons from './Components/ScrollSocialButtons';
import Home_page from './Pages/Home_page';
import Projects_page from './Pages/Projects_page';
import Services from './Pages/Services';
import FullGallery from './Pages/FullGalery'; 
import Gallery from './Pages/Gallery';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <ScrollSocialButtons />

      <Routes>
        <Route path="/" element={
          <>
            <Home_page />
            <Projects_page />
            <Services />
            <Gallery />
          </>
        } />
        <Route path="/full-gallery" element={<FullGallery />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
