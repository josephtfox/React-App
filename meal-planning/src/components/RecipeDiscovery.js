import React from 'react';
import './RecipeDiscovery.css'; // Import the CSS file

const RecipeDiscovery = ({ recipes }) => {
  return (
    <div className="recipe-discovery">
      <h2>Discover Recipes</h2>
      <div className="recipe-list">
        {recipes.map((recipe, index) => (
          <div key={index} className="recipe-card">
            <h3>{recipe.name}</h3>
            <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeDiscovery;