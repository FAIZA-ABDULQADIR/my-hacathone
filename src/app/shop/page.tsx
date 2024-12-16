import Image from "next/image";


// Define the ItemGrid component
function ItemGrid() {
  const items = [
    { name: "Syiltherine", image: "/syl.png", price: "Rp 2.500.000", discount: "Rp 3.500.000", tag: "-30%", isNew: false },
    { name: "Leviosa", image: "/levi.png", price: "Rp 2.500.000", discount: null, tag: null, isNew: false },
    { name: "Lolito", image: "/lolito.png", price: "Rp 7.000.000", discount: "Rp 14.000.000", tag: "-50%", isNew: false },
    { name: "Respira", image: "/respira.png", price: "Rp 5.000.000", discount: null, isNew: false },
    { name: "Grifo", image: "/grifo.png", price: "Rp 1.500.000", discount: null, tag: null, isNew: false },
    { name: "Muggo", image: "/muggo.png", price: "Rp 150.000", discount: null, tag: "New", isNew: true },
    { name: "Pingky", image: "/pingky.png", price: "Rp 7.000.000", discount: "Rp 14.000.000", tag: "-50%", isNew: false },
    { name: "Pooty", image: "/potty.png", price: "Rp 500.000", discount: null, tag: null, isNew: false },
    { name: "Syiltherine", image: "/syl.png", price: "Rp 2.500.000", discount: "Rp 3.500.000", tag: "-30%", isNew: false },
    { name: "Leviosa", image: "/levi.png", price: "Rp 2.500.000", discount: null, tag: null, isNew: false },
    { name: "Lolito", image: "/lolito.png", price: "Rp 7.000.000", discount: "Rp 14.000.000", tag: "-50%", isNew: false },
    { name: "Respira", image: "/respira.png", price: "Rp 5.000.000", discount: null, isNew: false },
    { name: "Grifo", image: "/grifo.png", price: "Rp 1.500.000", discount: null, tag: null, isNew: false },
    { name: "Muggo", image: "/muggo.png", price: "Rp 150.000", discount: null, tag: "New", isNew: true },
    { name: "Pingky", image: "/pingky.png", price: "Rp 7.000.000", discount: "Rp 14.000.000", tag: "-50%", isNew: false },
    { name: "Pooty", image: "/potty.png", price: "Rp 500.000", discount: null, tag: null, isNew: false },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative border p-4 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300"
          >
            {item.tag && (
              <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                {item.tag}
              </span>
            )}
            {item.isNew && (
              <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                NEW
              </span>
            )}
            <Image
              src={item.image}
              alt={item.name}
              width={285}
              height={301}
              className="rounded-t-lg hover:scale-105 transition-transform duration-300"
            />
            <div className="bg-gray-100 p-4 rounded-b-lg">
              <p className="text-lg font-bold">{item.name}</p>
              <p className="text-sm text-gray-500">Stylish cafe chair</p>
              <div className="flex items-baseline space-x-2">
                <p className="text-lg font-semibold">{item.price}</p>
                {item.discount && <p className="text-sm line-through text-gray-400">{item.discount}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Define the Pagination component
function Pagination() {
  const pages = ["1", "2", "3", "Next"];
  return (
    <div className="flex justify-center items-center gap-6 py-20 my-10">
      {pages.map((label, index) => (
        <button
          key={index}
          className={`w-14 h-14 flex justify-center items-center rounded-full text-sm font-medium ${
            label === "1"
              ? "bg-[#B88E2F] text-white"
              : "bg-[#F9F1E7] text-black hover:bg-gray-200 transition-colors"
          }`}
          aria-label={`Go to page ${label}`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

// Define the FeatureSection component
function FeatureSection() {
  const features = [
    { title: "High Quality", description: "crafted from top materials", icon: "/trophy.png" },
    { title: "Warranty Protection", description: "Over 2 years", icon: "/guarantee.png" },
    { title: "Free Shipping", description: "Order over 150 $", icon: "/shipping.png" },
    { title: "24 / 7 Support", description: "Dedicated support", icon: "/support.png" },
  ];

  return (
    <div className="bg-[#FAF3EA] py-20">
      <div className="container mx-auto flex flex-wrap justify-between items-center gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-row items-center gap-4 w-full md:w-auto hover:scale-105 transition-transform duration-300"
          >
            <div className="w-[60px] h-[60px]">
              <Image src={feature.icon} alt={feature.title} width={60} height={60} />
            </div>
            <div className="flex flex-col">
              <p className="text-lg font-bold text-[#242424]">{feature.title}</p>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Define the Shop component
function Shop() {
  return (
    <div className="w-1440 h-3474 px-4 md:px-8 lg:px-16">
     
      <Image
        src="/back.png"
        alt="Background Image"
        layout="responsive"
        width={1440}
        height={316}
        priority
        className="rounded-md"
      />
      <Image
        src="/base.png"
        alt="Secondary Background Image"
        layout="responsive"
        width={1440}
        height={100}
        priority
        className="rounded-md"
      />
      
        <ItemGrid />
        <Pagination />
        <FeatureSection  />
      
</div>
   
  );
}

export default Shop;
