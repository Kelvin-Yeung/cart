import CartItem from './CartItem.jsx'

export default function Cart({ setIsCartOpen, cart, total }) {
  return (
    <div className={`fixed right-0 top-0 z-20 h-screen w-1/4 bg-[#202020]`}>
      <div className="flex justify-between m-4">
        Cart
        <button
          onClick={() => setIsCartOpen(false)}
        >
          Close Cart
        </button>
      </div>
      


      {cart.length === 0 ?
      ("Empty")
    : 

    (cart.map((item) => (
      <CartItem key={item.title} title={item.title} img={item.img} price={item.price}
      />
    )))
    }
      
      <p>${total}</p>
    </div>
  );
}
