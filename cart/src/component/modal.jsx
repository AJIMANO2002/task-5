import React from 'react'

function modal({ isOpen, cart, closeCart, removeFromCart }) {

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded w-96">
                <h2 className="text-lg font-bold mb-4">Cart Items</h2>
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    cart.map((item) => (
                        <div key={item.id} className="flex justify-between items-center mb-4">
                            <span>{item.title}</span>
                            <button
                                className="text-red-600"
                                onClick={() => removeFromCart(item.id)}
                            >
                                Remove
                            </button>
                        </div>
                    ))
                )}
                <button
                    className="bg-gray-300 px-4 py-2 rounded mt-4"
                    onClick={closeCart}
                >
                    Close
                </button>
            </div>
        </div>
    )
}

export default modal