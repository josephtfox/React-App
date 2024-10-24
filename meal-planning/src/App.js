import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import RecipeCreation from './components/RecipeCreation';
import RecipeDiscovery from './components/RecipeDiscovery';
import GroceryList from './components/GroceryList';
import WeeklyMealPlan from './components/WeeklyMealPlan';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import './App.css'


function App() {
  const sampleRecipes = [
    {
      name: 'Spaghetti Carbonara',
      ingredients: ['Spaghetti', 'Eggs', 'Parmesan Cheese', 'Pancetta', 'Pepper'],
      instructions: 'Cook spaghetti. In a bowl, mix eggs and cheese. Fry pancetta. Combine all with pepper.'
    },
    {
      name: 'Chicken Curry',
      ingredients: ['Chicken', 'Curry Powder', 'Onions', 'Tomatoes', 'Coconut Milk'],
      instructions: 'Cook onions and chicken. Add curry powder and tomatoes. Stir in coconut milk.'
    }
    // Add more recipes as needed
  ];

  const groceryItems = [
    { name: 'Apples', price: 1.99, quantity: 5, location: 'Produce' },
    { name: 'Bread', price: 2.49, quantity: 2, location: 'Bakery' },
    { name: 'Milk', price: 3.99, quantity: 1, location: 'Dairy' },
    { name: 'Eggs', price: 2.99, quantity: 1, location: 'Dairy' },
    { name: 'Chicken', price: 5.99, quantity: 1, location: 'Meat' },
  ];

  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <div className="content-area">
          <button className="toggle-btn" onClick={togglePanel}>
            {isPanelOpen ? '<<' : '>>'}
          </button>
          <div className={`side-panel ${isPanelOpen ? 'open' : ''}`}>
            <GroceryList items={groceryItems} />
          </div>
          <main className={`main-content ${isPanelOpen ? 'shifted' : ''}`}>
            <WeeklyMealPlan />
            <RecipeCreation />
            <RecipeDiscovery recipes={sampleRecipes} />
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
