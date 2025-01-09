import React from 'react'

function Navbar({ cartCount, openCart }) {
    return (


        <nav className="bg-blue-600 text-white flex justify-between p-4">
            <h1 className="text-lg font-bold">E-com</h1>
            <button
                className="bg-white text-blue-600 px-4 py-2 rounded"
                onClick={openCart}
            >
                Cart ({cartCount})
            </button>
        </nav>

    )
}

export default Navbar