// types.ts
export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  mobileImage?: string; // Adicione esta linha
  category: string;
}