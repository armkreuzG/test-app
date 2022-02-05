import { VFC } from 'react';
import Item from './Item';
import { ItemProps } from './@types/type';
import './App.scss';

const App: VFC = () => {
  const itemList = [
    {
      title: '商品名1',
      description: 'テキストテキストテキスト',
      unitPrice: 100,
      image: 'http://placekitten.com/300/200'
    },
    {
      title: '商品名2',
      description: 'テキストテキストテキスト',
      unitPrice: 200,
      image: 'http://placekitten.com/310/210'
    },
    {
      title: '商品名3商品名3商品名3商品名3商品名3商品名3',
      description: 'テキストテキストテキストテキストテキストテキストテキストテキストテキスト',
      unitPrice: 300,
      image: 'http://placekitten.com/320/220'
    },
    {
      title: '商品名4',
      description: 'テキストテキストテキスト',
      unitPrice: 400,
      image: 'http://placekitten.com/315/215'
    },
    {
      title: '商品名5',
      description: 'テキストテキストテキスト',
      unitPrice: 500,
      image: 'http://placekitten.com/340/240'
    },
    {
      title: '商品名6',
      description: 'テキストテキストテキスト',
      unitPrice: 600,
      image: 'http://placekitten.com/350/250'
    }
  ];

  return (
    <ul className='item-list'>
      {itemList.map((item: ItemProps, index: number) => (
        <Item
          key={index}
          title={item.title}
          description={item.description}
          unitPrice={item.unitPrice}
          image={item.image}
        />
      ))}
    </ul>
  );
};

export default App;
