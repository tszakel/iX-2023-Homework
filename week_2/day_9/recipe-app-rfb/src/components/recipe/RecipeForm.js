import React, { useState } from 'react';
import Spinner from '../common/Spinner';


export default function RecipeForm(props) {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [loading, setLoading] = useState(false);

  function onRecipeFormSubmit(e) {
    e.preventDefault();

    setLoading(true);
    props.onRecipeCreate(name,ingredients,instructions,false);
    setLoading(false);
    setName('');
  }

  return (
    <div>
      <form onSubmit={onRecipeFormSubmit}>
        <div className="input-group mb-3">
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="form-control"
            placeholder="Enter Recipe Name"
            type="text"
          ></input>
          <input
            value={ingredients}
            onChange={(e) => {
              setIngredients(e.target.value);
            }}
            className="form-control"
            placeholder="Enter Needed Ingredients"
            type="text"
          ></input>
          <input
            value={instructions}
            onChange={(e) => {
              setInstructions(e.target.value);
            }}
            className="form-control"
            placeholder="Enter Recipe Instructions"
            type="text"
          ></input>
          <button className="btn btn-outline-secondary" type="submit">
          {loading ? <Spinner extraClass="change-size" /> : '+'}
          </button>
        </div>
      </form>
    </div>
  );
}