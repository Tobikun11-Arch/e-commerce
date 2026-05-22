const products = [
  {
    name: 'Classic White T-Shirt',
    price: '$30.99',
    sold: '1,024 pcs sold',
    image: '/assets/codewear-classic.png'
  },
  {
    name: 'Graphic Print Hoodie',
    price: '$30.99',
    sold: '980 pcs sold',
    image: '/assets/debug-mode-shirt.png'
  },
  {
    name: 'Denim Jacket',
    price: '$30.99',
    sold: '870 pcs sold',
    image: '/assets/infinite-loop-tee.png'
  },
  {
    name: 'Black Polo Shirt',
    price: '$30.99',
    sold: '820 pcs sold',
    image: '/assets/techy-tee.png'
  },

  {
    name: 'Maroon Polo Shirt',
    price: '$30.99',
    sold: '820 pcs sold',
    image: '/assets/codewear-classic.png'
  },

  {
    name: 'White Polo Shirt',
    price: '$30.99',
    sold: '820 pcs sold',
    image: '/assets/debug-mode-shirt.png'
  },

  {
    name: 'Brown Polo Shirt',
    price: '$30.99',
    sold: '820 pcs sold',
    image: '/assets/infinite-loop-tee.png'
  },

  {
    name: 'Green Polo Shirt',
    price: '$30.99',
    sold: '820 pcs sold',
    image: '/assets/techy-tee.png'
  }
];

export default function ProductCard() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">
        T-Shirt Collections
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg shadow hover:shadow-md transition p-4 flex flex-col items-center text-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-24 h-24 object-cover rounded mb-3"
            />
            <h3 className="font-semibold text-gray-800">{product.name}</h3>
            <p className="text-blue-600 font-medium mt-1">{product.price}</p>
            <p className="text-sm text-gray-500 mt-1">{product.sold}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
