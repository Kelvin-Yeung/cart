export default function CartItem({ title, img, price }) {
  return (
    <div className="flex">
      <img src={img} alt={title} width="100px" height="100px" />
      <p>{title}</p>
      <p>${price}</p>
    </div>
  )
}