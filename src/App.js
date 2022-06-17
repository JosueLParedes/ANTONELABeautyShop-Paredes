//@ts-check
import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom';


import Home from './pagina/home';
import Contact from './pagina/contact';
import Products from './pagina/products';
import NavbarE from './navegation/navbar';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <NavbarE/>}>
            <Route index element={<Home/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='products' element={<Products/>}/>

          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
