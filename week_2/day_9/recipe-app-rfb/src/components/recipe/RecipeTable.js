import React from 'react';

export default function RecipeTable(props) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Favorites</th>
            <th>Name</th>
            <th>Ingredients</th>
            <th>Instructions</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.recipes.map((recipe) => {
            return (
              <tr key={recipe.id}>
                <td>
                  <div onClick={() => props.onRecipeFavoriteToggle(recipe.id)}>
                    <i
                      className={
                        recipe.favorite ? "bi bi-star-fill" : "bi bi-star"
                      }
                    ></i>
                  </div>
                </td>
                <td>{recipe.name}</td>
                <td>{recipe.ingredients}</td>
                <td>{recipe.instructions}</td>
                <td>
                  <div onClick={() => props.onRecipeRemove(recipe.id)}>
                    <i className="bi bi-trash"> </i>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}