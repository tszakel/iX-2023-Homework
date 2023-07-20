import React, {useState, useEffect} from 'react';
import '../App.css';

export default function GuessScreen() {
    // const url = "https://pokeapi.co/api/v2/pokemon/?limit=1500";
    const url = "https://pokeapi.co/api/v2/pokemon/";
    const [pokemon, setPokemon] = useState('');
    const [move, setMove] = useState('');
    const [ability, setAbility] = useState('');
    const [type, setType] = useState('');
    const [pokeName, setPokeName] = useState('');
    const [dataFetched, setDataFetched] = useState(false); // New state variable

    useEffect(() => {
      if (!dataFetched) {
        fetchPokeData();
        setDataFetched(true);
      }
    }, [dataFetched]);

    function checkGuess(){
        var response = document.getElementById('alertBox');
        const node = document.createElement('div');
        if(pokemon.toLocaleLowerCase() === pokeName){
            node.innerHTML = '<div class="alert alert-success" role="alert" id=>Nice job!</div>';
        }else{
            node.innerHTML = '<div class="alert alert-danger" role="alert" id="wrong">Nope! The pokemon was ${pokeName}.</div>';
        }
        response.appendChild(node);
    }

    function displayTraits() {
        return (
          <div class="container text-center" id="traits">
            <div class="row">
              <div class="col fs-3">Move: {move}</div>
              <div class="col fs-3">Ability: {ability}</div>
              <div class="col fs-3">Type: {type}</div>
            </div>
          </div>
        );
      }

    function onPokemonSubmit(e){
        e.preventDefault();
        checkGuess();
    }
    

    function fetchPokeData() {
        const url = "https://pokeapi.co/api/v2/pokemon/";
        let random = Math.floor((Math.random() * 1281) + 1);

        // Fetch data from the API
        fetch(url + random)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            setPokeName(data.name);
            setMove(data.moves[0].move.name);
            setAbility(data.abilities[0].ability.name);
            setType(data.types[0].type.name);
            // console.log('Move: ', move);
            // console.log('Ability: ', ability);
            // console.log('Type: ', type);
            displayTraits();
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }

    return (
        <div>
            <h1 className='text-center'> Who's That Pokemon? </h1>
            <img src="https://api.triviacreator.com/v1/imgs/quiz/whos_that_pokemon-a5373887-8dd0-449f-8475-d7bc129d767d.webp" className="rounded img-thumbnail"/>
            {dataFetched && displayTraits()}
            <form id='form' onSubmit={onPokemonSubmit}>
                <div className='mb-3'>
                    <input 
                    id='pokemon-input' 
                    type='text' 
                    className='form-control' 
                    placeholder='Enter pokemon' 
                    value={pokemon}
                    onChange={(e) => setPokemon(e.target.value)}></input>
                </div>
    
                <div className='d-grid mt-4'>
                    <button className='btn btn-primary' type='submit'>
                        Make Guess
                    </button>
                </div>
            </form>

            <div id='alertBox'></div>
        </div>
    )
}