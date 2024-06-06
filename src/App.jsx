import './App.css';
import Header from './components/Header/Header';
import Ticker from './components/Ticker/Ticker';
import BlockPlanNutrition from './components/BlockPlanNutrition/BlockPlanNutrition';

function App() {

  return (
    <div className='App'>
        <Header/>
        <Ticker/>
        <BlockPlanNutrition/>
    </div>
  )
}

export default App;