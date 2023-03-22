export const InitialStateCart: IInitialStateCart[] = [
  {
    id: 3,
    name: "shoes",
    category: "Men",
    url: "https://i.dummyjson.com/data/products/59/thumbnail.jpg",
    price: 200,
    quantity: 10,
  },
  {
    id: 4,
    name: "shoes",
    category: "Men",
    url: "https://i.dummyjson.com/data/products/59/thumbnail.jpg",
    price: 200,
    quantity: 10,
  },
];

export interface IInitialStateCart {
  id: number;
  name: string;
  category: string;
  url: string;
  price: number;
  quantity: number;
}
