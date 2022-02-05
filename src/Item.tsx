import { ItemProps } from './@types/type';
import './App.scss';

const Item = (item: ItemProps) => {
  return (
    <li className='item-list--item' style={{ backgroundImage: `url(${item.image})` }}>
      <div className='item-list--item--summary'>
        <h2 className='item-list--item--title'>{item.title}</h2>
        <p className='item-list--item--desc'>{item.description}</p>
        <p className='item-list--item--price'><span>{item.unitPrice}</span>円</p>
      </div>
    </li>
  );
};

export default Item;
