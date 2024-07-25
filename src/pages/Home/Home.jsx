import Header from '../../components/Header/Header';
import Ticker from '../../components/Ticker/Ticker';
import BlockPlanNutrition from '../../components/BlockPlanNutrition/BlockPlanNutrition';
import Treining from '../../components/Treining/Treining';
import Footer from '../../components/Footer/Footer';
import Reviews from '../../components/Reviews/Reviews';

function Home() {

  return (
    <div className='Home'>
        <Header/>
        <Ticker/>
         <BlockPlanNutrition/>
         <Treining/>
         <Reviews/> 
         <Footer/>
        
    </div>
  )
}

export default Home;
