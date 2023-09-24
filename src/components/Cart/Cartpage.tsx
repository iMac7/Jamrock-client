'use client'

export default function Cartpage() {

  const cartItems = [
    { id: 1, name: 'Product 1', price: 20, quantity: 2 },
    { id: 2, name: 'Product 2', price: 15, quantity: 1 },
  ];

  function handleCheckout() {
    console.log('check out')
    return
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-4">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b-2 border-gray-200 py-2"
            >
              <div>
                <p className="text-lg font-semibold">{item.name}</p>
                <p className="text-gray-600">${item.price} each</p>
              </div>
              
              <div className="flex items-center">
                <span className="mr-4">{item.quantity} x</span>
                <button className="text-red-500">Remove</button>
              </div>
            </div>
          ))}

          <div className="mt-4">
            <p className="text-lg font-semibold">
              Total: $
              {cartItems.reduce(
                (total, item) => total + item.price * item.quantity,
                0
              )}
            </p>
          </div>

          <div className="mt-4">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>

        </div>
      )}
    </div>
  );
}

