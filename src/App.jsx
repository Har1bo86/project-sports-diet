import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import ReadyMadeRacions from './pages/ReadyMadeRacions/ReadyMadeRacions'


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/ReadyMadeRacions" element={<ReadyMadeRacions />}/>
      <Route path="*" element={<Home />}/>
      </Routes>
      {/* <Routes>
      <Route path="/ReadyMadeRacions" element={<ReadyMadeRacions />}/>
      </Routes> */}
        
    </BrowserRouter>
  )
}

export default App;