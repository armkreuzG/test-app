export type ItemProps = {
  title: string;
  description: string;
  unitPrice: number;
  image: string
}

export type ItemListProps = {
  itemList: ItemProps[];
}
