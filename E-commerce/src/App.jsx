import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './Component/Sidebar/Sidebar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home'
import Bag from './Component/Bag/Bag'
import Cart from './Component/Cart/Cart'
import Offer from './Component/Offer/Offer'
import Truck from './Component/Truck/Truck'
import { Fav } from './Component/Fav/Fav'

function App() {
  const [added, setadded] = useState([]);
  
  return (
    <Router>

  
<div className="app-container">
        <Sidebar />
        <div className="main-content">
        <Routes>
          <Route path="/" element={<Home/>}/>
         < Route path="/bag" element={<Bag />}/>
         < Route path="/cart" element={<Cart  added={added}/>}/>
         < Route path="/offer" element={<Offer/>}/>
         < Route path="/truck" element={<Truck/>}/>
         < Route path="/fav" element={<Fav setadded={setadded} added={added}/>}/>
        </Routes>
       
      </div>
    </div>
    </Router>
  )
}

export default App
