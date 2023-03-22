export const InitialStateCart: IInitialStateCart[] = [];

export interface IInitialStateCart {
  id: number;
  name: string;
  category: string;
  url: string;
  price: number;
  quantity: number;
}
