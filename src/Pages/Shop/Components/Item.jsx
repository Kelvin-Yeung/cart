export default function Item({ item }) {
  let quantity = 0;
  let price = Math.log(item.id);
  return (
    <div className="max-w-sm rounded-3xl bg-[#202020]">
      <img src={item.background_image} className="rounded-t-3xl"></img>
      <div className="flex flex-col p-4 gap-2">
      {quantity === 0 ? <button className="w-full rounded-full border">Add to Cart +</button> : null}
        <div className="flex justify-between">
          {/* Add OS Logos Here! */}
          ${price.toFixed(2)}
        </div>
        {item.name} 
      </div>
    </div>    
  )
}