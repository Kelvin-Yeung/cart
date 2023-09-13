import Item from './Item';

export default function ItemList({ itemList }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {itemList.map((item) =>
        <Item key={item.id} item={item} />
      )}
    </div>
  );
}