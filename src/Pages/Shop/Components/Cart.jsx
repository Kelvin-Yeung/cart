import CartItem from "./CartItem.jsx";

export default function Cart({ setIsCartOpen, cart, total, setCart }) {
  return (
    <>
      <div
        className="fixed left-0 top-0 z-20 h-screen w-[72%]"
        onClick={() => setIsCartOpen(false)}
      ></div>
      <div
        className={`fixed right-0 top-0 z-20 flex h-screen w-[28%] flex-col justify-between overflow-auto bg-[#202020]`}
      >
        <div className="flex flex-col">
          <div className="m-6 flex justify-between font-bold text-lg">
            <p>{cart.length} Games Added</p>
            <button onClick={() => setCart([])}>Clear</button>
          </div>
          {cart.map((item) => (
            <CartItem
              key={item.title}
              title={item.title}
              img={item.img}
              price={item.price}
            />
          ))}
        </div>
        <div className="m-6 flex justify-between font-bold text-lg">
          <p className="text-[#a0a0a0]">Subtotal: ${total}</p>
        </div>
      </div>
    </>
  );
}
