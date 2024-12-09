import Image from 'next/image';

export default function HeroSection() {
    return (
        <div className="relative bg-white min-h-screen -ml-3 pt-[120px] w-full">
            {/* Background Image */}
            <Image
                src="/heropic.png"
                alt="Hero Picture"
                layout="fill"
                objectFit="cover"
                className="absolute top-[-52px] left-[25px] z-0"
            />

            {/* Text Content Container */}
            <div className="absolute bg-[#FFF3E3] rounded-lg p-6" style={{
                width: '100%', maxWidth: '643px', minHeight: '443px',
                right: '25%', transform: 'translateX(50%)', top: '220px'
            }}>
                {/* Title */}
                <h1 className="font-poppins normal-case font-semibold text-lg lg:text-xl tracking-wide text-gray-800 mt-5 mb-5">
                    New Arrival
                </h1>

                <h2 className="font-poppins font-bold text-4xl lg:text-5xl leading-tight text-[#B88E2F] mb-5">
                    Discover Our New Collection
                </h2>

                {/* Subtitle */}
                <p className="font-poppins font-medium text-base lg:text-lg leading-6 text-gray-800">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                </p>

                {/* Button */}
                <button className="flex items-center justify-center px-10 py-4 mt-4 text-white bg-[#B88E2F] rounded-md shadow-lg hover:bg-[#a67c1b] transition-colors duration-300 cursor-pointer">
                    Buy Now
                </button>
            </div>
        </div>
    );
}
