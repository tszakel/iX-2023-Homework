import React, { useState, useEffect } from 'react';

import { Recipe } from '../../models/Recipe';

import RecipeForm from './RecipeForm';
import RecipeTable from './RecipeTable';

import RecipeService from '../../services/recipe-service';

export default function RecipePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    if (!recipes.length) {
      onInitialLoad();
    }
  }, []);

  async function onInitialLoad() {
    try {
      const recipes = await RecipeService.fetchRecipes();
      setRecipes(recipes);
    } catch (err) {
      console.log(err);
    }
  }

  async function onRecipeCreate(name, ingredients, instructions) {
    const recipe = await RecipeService.createRecipe(new Recipe(null, name, ingredients, instructions,false));
    setRecipes([...recipes, recipe]);
  }

  async function onRecipeRemove(recipeId) {
    await RecipeService.deleteRecipe(recipeId);
    setRecipes(recipes.filter((recipe) => recipe.id !== recipeId));
  }

  async function onRecipeFavoriteToggle(recipeId) {
    const recipeToToggle = recipes.find((recipe) => recipe.id === recipeId);
    recipeToToggle.favorite = !recipeToToggle.favorite;

    const updatedRecipe = await RecipeService.updateRecipe(recipeToToggle);

    setRecipes(
      recipes.map((recipe) => {
        return recipe.id == recipeId ? updatedRecipe : recipe;
      })
    );
  }
  return (
    <div className="container mt-5">
      <div className="card card-body text-center">
        <h1>Recipe Book</h1>
        <hr />
        <p>An easy way to keep track of your recipes</p>

        <RecipeForm onRecipeCreate={onRecipeCreate} />
        <RecipeTable
          recipes={recipes}
          onRecipeRemove={onRecipeRemove}
          onRecipeFavoriteToggle={onRecipeFavoriteToggle}
        />
      </div>
    </div>
  );
}