import React from 'react';
import './CSS/Menu.css'; 
import foodImage1 from '../assets/dish1.jpg'; 
import foodImage2 from '../assets/dish2.jpg';
import foodImage3 from '../assets/dish1.jpg';
import foodImage4 from '../assets/dish2.jpg';
import foodImage5 from '../assets/dish1.jpg';
import foodImage6 from '../assets/dish2.jpg';
import foodImage7 from '../assets/dish1.jpg';
import foodImage8 from '../assets/dish2.jpg';

function Menu() {
  const foodItems = [
    { id: 1, image: foodImage1, title: "Food Item 1", description: "Tomatoes, Basil, Mozzarella, Olive oil" },
    { id: 2, image: foodImage2, title: "Food Item 2", description: "Chicken, Garlic, Lemon, Thyme" },
    { id: 3, image: foodImage3, title: "Food Item 3", description: "Beef, Onions, Bell Peppers, Soy Sauce" },
    { id: 4, image: foodImage4, title: "Food Item 4", description: "Salmon, Dill, Lemon, Asparagus" },
    { id: 5, image: foodImage5, title: "Food Item 5", description: "Pasta, Tomatoes, Basil, Parmesan" },
    { id: 6, image: foodImage6, title: "Food Item 6", description: "Eggs, Bacon, Cheese, Avocado" },
    { id: 7, image: foodImage7, title: "Food Item 7", description: "Lamb, Rosemary, Garlic, Mint" },
    { id: 8, image: foodImage8, title: "Food Item 8", description: "Mushrooms, Spinach, Ricotta, Nutmeg" },
    { id: 9, image: foodImage1, title: "Food Item 9", description: "Shrimp, Garlic, Butter, Parsley" },
    { id: 10, image: foodImage2, title: "Food Item 10", description: "Tofu, Broccoli, Ginger, Soy Sauce" },
    { id: 11, image: foodImage1, title: "Food Item 11", description: "Pork, Apple, Sage, Mustard" },
    { id: 12, image: foodImage2, title: "Food Item 12", description: "Zucchini, Feta, Mint, Olive oil" }
  ];

  return (
    <div className="menuContainer">
      <div className="menuGrid">
        {foodItems.map((food) => (
          <div key={food.id} className="menuItem">
            <div className="menuBox">
              <img src={food.image} alt={food.title} className="menuImage" />
              <h3 className="menuTitle">{food.title}</h3>
              <p className="menuDescription">{food.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
