import React, {useState, useEffect} from 'react';

export default function RecipeForm(props) {
    const [name, setName] = useState('');
  
    function onRecipeFormSubmit(e) {
      e.preventDefault();
  
      props.onRecipeCreate(name);
      setName('');
    }
  
    return (
      <div>
        <h1 className='text-center'>Recipe App</h1>
        <form onSubmit={onRecipeFormSubmit}>
          <div className="input-group mb-3 p-2">
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="form-control"
              placeholder="Enter Recipe"
              type="text"
            ></input>
            <button className="btn btn-outline-secondary" type="submit">
              +
            </button>
          </div>
        </form>
      </div>
    );
  }