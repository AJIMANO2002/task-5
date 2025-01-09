import React from 'react'

function ProductCard({ product, addToCart }) {
  return (

    <div className="border p-4 rounded shadow-md">
      <img src={product.image} alt={product.title} className="h-40 mx-auto" />
      <h2 className="font-bold text-lg mt-2">{product.title}</h2>
      <p className="text-gray-600">${product.price}</p>
      <button
        className="bg-blue-600 text-white px-4 py-2 mt-2 rounded"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>

  )
}

export default ProductCard