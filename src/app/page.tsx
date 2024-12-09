// pages/_app.js or inside any specific page component
import Navbar from './components/navbar';
import HeroSection from './components/herosection';
import BrowseTheRange from './components/browsetherange'
import ProductGrid from './components/product';
import Footer from './components/footer'
import  RoomInspiration from './components/inspiration';
import FurnitureGallery from './components/furniture';

function Home() {
  return (
     <div>
      
      <Navbar />
      <HeroSection/>
     <BrowseTheRange/>
     <ProductGrid/>
     <RoomInspiration/>
     <FurnitureGallery/>
     <Footer/> </div>
  );
}

export default Home;
