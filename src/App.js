import Loginpanel from "./Components/Loginpanel/Loginpanel";
import './App.css'
import Home from "./Components/Homepanel/Home";
import  {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loginpanel/>}/>
          <Route path="/Home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
