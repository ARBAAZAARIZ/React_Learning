
import './App.css'

import { BrowserRouter, Routes, Route, Link } from 'react-router'

function App() {

  return (


    <div>
      <BrowserRouter>
        <Link to="/">Home</Link>
        <br />
        <Link to="/about">About</Link>
        <br />
        <Link to="/contact">Contact</Link>



        <Routes>
          <Route path='/' element={<h1>Home</h1>} />
          <Route path='/about' element={<h1>About React Routing</h1>} />
          <Route path='/contact' element={<h1>Contact Details</h1>} />

        </Routes>


      </BrowserRouter>


    </div>

  );


}

export default App
