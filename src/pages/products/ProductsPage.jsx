import {useState} from 'react';
import ProductCard from '../../components/products/ProductCard';

const ProductPage = () => {
  const [activeTab, setActiveTab] = useState('manage');
  const [notifMessage, setNotifMessage] = useState('');
  const [showNotif, setShowNotif] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');
  const [openActionMenu, setOpenActionMenu] = useState(null);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Wireless Bluetooth Headphones',
      category: 'Electronics',
      price: '$89.99',
      discount: '15%',
      stock: 178,
      status: 'published'
    },
    {
      id: 2,
      name: 'Smart Air Purifier',
      category: 'Home & Kitchen',
      price: '$199.99',
      discount: '10%',
      stock: 50,
      status: 'published'
    }
  ]);

  const handleNotif = message => {
    setNotifMessage(message);
    setShowNotif(true);
    setTimeout(() => setShowNotif(false), 2500);
  };

  const handleSizeClick = size => {
    setSelectedSize(size);
  };

  const handleAddProduct = e => {
    e.preventDefault();
    handleNotif('Product added successfully!');
    e.target.reset();
    setSelectedSize('');
  };

  const handleDeleteProduct = product => {
    const shouldDelete = window.confirm(
      `Are you sure you want to delete "${product.name}"?`
    );

    if (shouldDelete) {
      setProducts(currentProducts =>
        currentProducts.filter(item => item.id !== product.id)
      );
      setOpenActionMenu(null);
      handleNotif('Product deleted successfully!');
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold sm:text-2xl">Products</h2>
      <div className="flex flex-col gap-3 rounded-xl border border-gray-100 bg-white p-2 shadow-sm sm:flex-row sm:gap-4 sm:p-3">
        {['add', 'manage', 'list'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition sm:text-base ${
              activeTab === tab
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {tab === 'add'
              ? 'Add New Product'
              : tab === 'manage'
              ? 'Manage Products'
              : 'Product List'}
          </button>
        ))}
      </div>

      {activeTab === 'add' && (
        <form
          onSubmit={handleAddProduct}
          className="grid gap-4 lg:grid-cols-2 lg:gap-6"
        >
          <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm sm:p-6">
            <h3 className="mb-4 text-lg font-semibold text-gray-900">
              General Information
            </h3>
            <input
              type="text"
              placeholder="Name Product"
              className="mb-3 w-full rounded-lg border border-gray-200 px-3 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
            <textarea
              placeholder="Product Description"
              className="mb-3 h-24 w-full rounded-lg border border-gray-200 px-3 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            ></textarea>

            <div className="mb-3">
              <p className="mb-2 text-sm font-medium text-gray-500">
                Pick Available Size
              </p>
              <div className="flex flex-wrap gap-2">
                {['XS', 'S', 'M', 'XL', 'XXL', 'N/A'].map(size => (
                  <button
                    type="button"
                    key={size}
                    onClick={() => handleSizeClick(size)}
                    className={`rounded-lg border px-3 py-1 text-sm transition ${
                      selectedSize === size
                        ? 'border-green-500 bg-green-500 text-white'
                        : 'border-gray-200 hover:bg-green-50'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <input
              type="text"
              placeholder="SKU (optional)"
              className="mb-3 w-full rounded-lg border border-gray-200 px-3 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

            <h3 className="mb-3 font-semibold text-gray-900">
              Pricing and Stock
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                type="number"
                placeholder="Price"
                className="rounded-lg border border-gray-200 px-3 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
              <input
                type="number"
                placeholder="Stock"
                className="rounded-lg border border-gray-200 px-3 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
              <input
                type="number"
                placeholder="Discount (%)"
                className="rounded-lg border border-gray-200 px-3 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
              <select className="rounded-lg border border-gray-200 px-3 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100">
                <option>New</option>
                <option>Used</option>
              </select>
            </div>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm sm:p-6">
            <h3 className="mb-4 text-lg font-semibold text-gray-900">
              Upload Product
            </h3>
            <div className="mb-4 flex h-40 items-center justify-center rounded-xl border border-dashed border-gray-300 bg-gray-50 px-4">
              <input
                type="file"
                className="w-full cursor-pointer text-sm"
                onChange={e =>
                  e.target.files[0] &&
                  handleNotif(`Image "${e.target.files[0].name}" uploaded!`)
                }
              />
            </div>

            <h3 className="mb-2 font-semibold text-gray-900">Category</h3>
            <select className="w-full rounded-lg border border-gray-200 px-3 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100">
              <option>Electronics</option>
              <option>Fashion</option>
              <option>Home & Kitchen</option>
              <option>Automotive</option>
            </select>

            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => handleNotif('Product saved as draft!')}
                className="rounded-lg border border-gray-300 px-4 py-2 font-medium transition hover:bg-gray-100"
              >
                Save Draft
              </button>
              <button
                type="submit"
                className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700"
              >
                Add Product
              </button>
            </div>
          </div>
        </form>
      )}

      {activeTab === 'manage' && (
        <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm sm:p-6">
          <h3 className="text-lg font-semibold mb-4">Manage Products</h3>
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="min-w-760px w-full border-collapse text-sm">
              <thead className="bg-gray-50 text-left text-gray-500">
                <tr>
                  <th className="px-4 py-3 font-medium">Product Name</th>
                  <th className="px-4 py-3 font-medium">Category</th>
                  <th className="px-4 py-3 font-medium">Price</th>
                  <th className="px-4 py-3 font-medium">Discount</th>
                  <th className="px-4 py-3 font-medium">Stock</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                  <th className="px-4 py-3 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {products.length > 0 ? (
                  products.map(product => (
                    <tr key={product.id} className="hover:bg-gray-50">
                      <td className="px-4 py-4 font-medium text-gray-800">
                        {product.name}
                      </td>
                      <td className="px-4 py-4 text-gray-600">
                        {product.category}
                      </td>
                      <td className="px-4 py-4 text-gray-800">
                        {product.price}
                      </td>
                      <td className="px-4 py-4 text-gray-600">
                        {product.discount}
                      </td>
                      <td className="px-4 py-4 text-gray-600">
                        {product.stock}
                      </td>
                      <td className="px-4 py-4">
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-md text-xs font-medium">
                          {product.status}
                        </span>
                      </td>
                      <td className="relative px-4 py-4 text-right">
                        <button
                          type="button"
                          onClick={() =>
                            setOpenActionMenu(
                              openActionMenu === product.id ? null : product.id
                            )
                          }
                          className="rounded px-2 py-1 text-xl leading-none hover:bg-gray-100"
                        >
                          ...
                        </button>
                        {openActionMenu === product.id && (
                          <div className="absolute right-4 top-10 z-10 w-32 rounded-lg border border-gray-100 bg-white py-2 text-left shadow-lg">
                            <button
                              type="button"
                              onClick={() => handleDeleteProduct(product)}
                              className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50"
                            >
                              Delete
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="px-4 py-12 text-center">
                      <p className="font-medium text-gray-700">
                        No products found
                      </p>
                      <p className="mt-1 text-sm text-gray-400">
                        Your product list is currently empty.
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'list' && (
        <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm sm:p-6">
          <ProductCard />
        </div>
      )}

      {showNotif && (
        <div className="fixed inset-x-4 bottom-4 rounded bg-green-500 px-4 py-3 text-white shadow-lg sm:inset-x-auto sm:right-6 sm:bottom-6">
          {notifMessage}
        </div>
      )}
    </div>
  );
};

export default ProductPage;
