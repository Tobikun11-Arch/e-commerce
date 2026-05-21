import React, { useState } from "react";
import ProductTable from "./ProductTable";

const ProductPage = () => {
  const [activeTab, setActiveTab] = useState("manage");
  const [notifMessage, setNotifMessage] = useState("");
  const [showNotif, setShowNotif] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");

  const handleNotif = (message) => {
    setNotifMessage(message);
    setShowNotif(true);
    setTimeout(() => setShowNotif(false), 2500);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Products</h2>

      {}
      <div className="flex gap-4 mb-6">
        {["add", "manage"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded ${
              activeTab === tab
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {tab === "add" ? "Add New Product" : "Manage Products"}
          </button>
        ))}
      </div>

      {}
      {activeTab === "add" && (
        <div className="grid grid-cols-2 gap-6">
          {}
          <div className="bg-white shadow rounded p-6">
            <h3 className="font-semibold mb-4">General Information</h3>
            <input
              type="text"
              placeholder="Name Product"
              className="w-full border rounded px-3 py-2 mb-3"
            />
            <textarea
              placeholder="Product Description"
              className="w-full border rounded px-3 py-2 mb-3 h-24"
            ></textarea>

            <div className="mb-3">
              <p className="text-sm text-gray-500 mb-1">Pick Available Size</p>
              <div className="flex gap-2">
                {["XS", "S", "M", "XL", "XXL", "N/A"].map((size) => (
                  <button
                    key={size}
                    onClick={() => handleSizeClick(size)}
                    className={`border rounded px-3 py-1 ${
                      selectedSize === size
                        ? "bg-green-500 text-white"
                        : "hover:bg-green-100"
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
              className="w-full border rounded px-3 py-2 mb-3"
            />

            <h3 className="font-semibold mb-2">Pricing and Stock</h3>
            <div className="grid grid-cols-2 gap-3">
              <input
                type="number"
                placeholder="Price"
                className="border rounded px-3 py-2"
              />
              <input
                type="number"
                placeholder="Stock"
                className="border rounded px-3 py-2"
              />
              <input
                type="number"
                placeholder="Discount (%)"
                className="border rounded px-3 py-2"
              />
              <select className="border rounded px-3 py-2">
                <option>New</option>
                <option>Used</option>
              </select>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-white shadow rounded p-6">
            <h3 className="font-semibold mb-4">Upload Product</h3>
            <div className="border rounded h-40 flex items-center justify-center mb-4">
              <input
                type="file"
                className="cursor-pointer"
                onChange={(e) =>
                  handleNotif(`Image "${e.target.files[0].name}" uploaded!`)
                }
              />
            </div>

            <h3 className="font-semibold mb-2">Category</h3>
            <select className="border rounded px-3 py-2 w-full">
              <option>Electronics</option>
              <option>Fashion</option>
              <option>Home & Kitchen</option>
              <option>Automotive</option>
            </select>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => handleNotif("Product saved as draft!")}
                className="border rounded px-4 py-2 hover:bg-gray-100"
              >
                Save Draft
              </button>
              <button
                onClick={() => handleNotif("Product added successfully!")}
                className="bg-green-500 text-white rounded px-4 py-2 hover:bg-green-600"
              >
                Add Product
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Manage Products */}
      {activeTab === "manage" && <ProductTable type="manage" />}

      {/* Toast Notification (bottom-right) */}
      {showNotif && (
        <div className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-3 rounded shadow-lg">
          ✅ {notifMessage}
        </div>
      )}
    </div>
  );
};

export default ProductPage;
