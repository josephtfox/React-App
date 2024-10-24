import React, { useState } from 'react';
import './RecipeCreation.css';

const RecipeCreation = () => {
  const [recipe, setRecipe] = useState({
    name: '',
    ingredients: '',
    instructions: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to save or process the recipe
    console.log('Recipe submitted:', recipe);
    // Reset the form after submission
    setRecipe({ name: '', ingredients: '', instructions: '' });
  };

  return (
    <div className="recipe-input">
      <h2>Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Recipe Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={recipe.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="ingredients">Ingredients:</label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleChange}
            required
            placeholder="Enter ingredients, one per line"
          />
        </div>
        <div>
          <label htmlFor="instructions">Instructions:</label>
          <textarea
            id="instructions"
            name="instructions"
            value={recipe.instructions}
            onChange={handleChange}
            required
            placeholder="Enter step-by-step instructions"
          />
        </div>
        <button type="submit">Save Recipe</button>
      </form>
    </div>
  );
};

export default RecipeCreation;