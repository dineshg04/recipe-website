import './App.css';
import Navbar from './component/Navbar.jsx';
import Home from './component/Home.jsx';
import Login from './component/Login.jsx';
import Dishes from './Search/Dishes.jsx';
import Recipie from './Search/recipie.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShoppingList from './Search/Shoppinglist.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' index element={<Navbar/>}></Route>
        <Route path='community' element={<Home/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='search' element={<Dishes/>}></Route>
        <Route path='recipe' element={<Recipie/>}></Route>
        <Route path='mealplanner' element={<ShoppingList/>}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
