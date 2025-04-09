import { useState } from 'react';
import '../styles/DishCard.css';
import DishCard from '../components/DishCard.jsx'
import Header from '../components/Header.jsx';

const Home = () => {
    const products = [
        {
          id: 1,
          name: 'Пицца',
          description: 'Традиционная итальянская пицца с тонким тестом и сыром',
          price: 150
        },
        {
          id: 2,
          name: 'Паста',
          description: 'Итальянская паста с соусом болоньезе',
          price: 130
        }
      ];

  return (
    <>
    <Header />
    <div>
      {products.map((product) => (
        <DishCard key={product.id} product={product} />
      ))}
    </div>
    </>
  );
};

export default Home; 
