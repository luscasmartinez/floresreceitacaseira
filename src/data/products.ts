// products.ts ou onde você define seus produtos
import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Pastel de Carne',
    description: 'Pastel artesanal recheado com carne moída temperada',
    price: 'R$ 8,00',
    image: 'src/img/pastelpc.png', // Desktop
    mobileImage: 'src/img/pastelmob.png', // Mobile
    category: 'pastel'
  },
  {
    id: 2,
    name: 'Bolo Caseiro',
    description: 'Pastel crocante recheado com queijo derretido',
    price: 'R$ 7,00',
    image: 'src/img/bolopc.png',
    mobileImage: 'https://i.imgur.com/4gbqOHk.jpeg',
    // Não tem mobileImage específica, usa a mesma
    category: 'bolo'
  },
  {
    id: 3,
    name: 'Empadas',
    description: 'Bolo caseiro de chocolate com cobertura cremosa',
    price: 'R$ 45,00',
    image: 'src/img/empadapc.png',
    mobileImage: 'src/img/empadamob.png',
    category: 'bolo'
  },
  
    
];

export const featuredProducts = products.slice(0, 4);