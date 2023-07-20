import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import GuessScreen from './components/GuessScreen';

function App() {

  return (
    <div className='text-center m-5'>
      <div className='card p-4'>
        <GuessScreen  />
      </div>
    </div>
  );
}

export default App;
