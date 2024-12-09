import Image from 'next/image';

export default function ProductGrid() {
  // Sample data array for products
  const products = [
    { name: "Syiltherine", image: "/syl.png", price: "Rp 2.500.000", discount: "Rp 3.500.000", tag: "-30%", isNew: false },
    { name: "Leviosa", image: "/levi.png", price: "Rp 2.500.000", discount: null, tag: null, isNew: false },
    { name: "Lolito", image: "/lolito.png", price: "Rp 7.000.000", discount: "Rp 14.000.000", tag: "-50%", isNew: false },
    { name: "Respira", image: "/respira.png", price: "Rp 5000.000", discount: null, isNew: false },
    { name: "Grifo", image: "/grifo.png", price: "Rp 1.500.000", discount: null , tag: null , isNew: false },
    { name: "Muggo", image: "/muggo.png", price: "Rp 150.000", discount: null, tag: "New", isNew: false },
    { name: "Pingky", image: "/pingky.png", price: "Rp 7000.000", discount: "Rp 14000.000", tag: "-50%", isNew: false },
    { name: "Pooty", image: "/potty.png", price: "Rp 500.000", discount: null, tag: null, isNew: false },
  ];

  return (
    <div className="relative container mx-auto px-4 py-6 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
        Our Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-8">
        {products.map(product => (
          <div key={product.name} className="relative border p-4 bg-white shadow rounded-lg">
            {product.tag && (
              <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                {product.tag}
              </span>
            )}
            {product.isNew && (
              <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                NEW
              </span>
            )}
            <Image src={product.image} alt={product.name} width={285} height={301} objectFit="cover" className="rounded-t-lg" />
            <div className="bg-gray-100 p-4 rounded-b-lg">
              <p className="text-lg font-bold">{product.name}</p>
              <p className="text-sm text-gray-500">Stylish cafe chair</p>
              <div className="flex items-baseline space-x-2">
                <p className="text-lg font-semibold">{product.price}</p>
                {product.discount && <p className="text-sm line-through text-gray-400">{product.discount}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <button className="bg-white text-[#D4AF37] border border-[#D4AF37] px-4 py-2 shadow hover:bg-[#f4f4f4] transition duration-300">
          Show More
        </button>
      </div>
    </div>
  );
}
