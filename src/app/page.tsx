// pages/_app.js or inside any specific page component
import HeroSection from './components/herosection';
import BrowseTheRange from './components/browsetherange'
import ProductGrid from './components/product';
import  RoomInspiration from './components/inspiration';
import FurnitureGallery from './components/furniture';

function Home() {
  return (
     <div>
      
  
      <HeroSection/>
     <BrowseTheRange/>
     <ProductGrid/>
     <RoomInspiration/>
     <FurnitureGallery/>
      </div>
  );
}

export default Home;
