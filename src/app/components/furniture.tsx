import Image from 'next/image';

export default function FurnitureGallery() {
    return (
        <div className="relative bg-white min-h-screen flex items-center justify-center">
            <Image
                src="/furniture.png" // Path to your image (can be a relative path or URL)
                alt="Furniture Showcase"
                width={1799} // Image width (you should specify this)
                height={780} // Image height (you should specify this)
                className="max-w-full h-auto" // Use max-width and auto height for responsiveness
                priority // Optional: If this image is critical for the first render
            />
        </div>
    );
}
