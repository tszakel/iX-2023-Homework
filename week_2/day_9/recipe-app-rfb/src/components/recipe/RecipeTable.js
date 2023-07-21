import React from 'react';

export default function RecipeTable(props) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Ingredients</th>
            <th>Instructions</th>
          </tr>
        </thead>
        <tbody>
          {props.recipes.map((recipe) => {
            return (
              <tr key={recipe.id}>
                <td>{recipe.name}</td>
                <td>
                  {/* non arrow function used we want the event as the parameter */}
                  {/* <div onClick={props.onCompleteTaskToggle}></div> */}
                  {/* arrow function used because we want access to variables inside the component */}
                  <div onClick={() => props.onRecipeFavoriteToggle(recipe.id)}>
                    <i
                      className={
                        recipe.favorite ? 'bi bi-circle-fill' : 'bi bi-circle'
                      }
                    ></i>
                  </div>
                </td>
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