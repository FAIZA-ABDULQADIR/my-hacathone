import Image from 'next/image';
import Link from 'next/link';

export default function BrowseTheRange() {
  return (
    <div className="relative container mx-auto px-4 py-8 bg-white" > {/* Adjust top based on HeroSection's height */}
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-4  letterSpacing-3px">
        Browse The Range
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      
      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Dining */}
        <div className="group cursor-pointer relative bg-white rounded-lg shadow overflow-hidden">
          <Image src="/dining.png" alt="Dining" layout="responsive" width={742} height={427} objectFit="cover" />
          <h3 className="text-center mt-2 font-medium text-lg bg-white py-2">Dining</h3>
        </div>

        {/* Living */}
        <div className="group cursor-pointer relative bg-white rounded-lg shadow overflow-hidden">
          <Image src="/living.png" alt="Living" layout="responsive" width={742} height={427} objectFit="cover" />
          <h3 className="text-center mt-2 font-medium text-lg bg-white py-2">Living</h3>
        </div>

        {/* Bedroom */}
        <div className="group cursor-pointer relative bg-white rounded-lg shadow overflow-hidden">
          <Image src="/bedroom.png" alt="Bedroom" layout="responsive" width={742} height={427} objectFit="cover" />
          <h3 className="text-center mt-2 font-medium text-lg bg-white py-2">Bedroom</h3>
        </div>
      </div>
    </div>
  );
}
