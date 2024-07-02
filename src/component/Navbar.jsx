import React from 'react';
import { useNavigate } from 'react-router-dom';
import Recipe from '../Home/Recipe';
import Home from '../Home/Home';
import Rank from '../Home/Social';
import Menu from '../Home/Menu';
import Search from '../Home/Search';
import { Component } from '../Home/Footer';

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col">
      <div className="navbar-container flex justify-between items-center p-2 mt-2 px-9">
        <div className="logo font-bold flex justify-center items-center w-20"><img src='/public/logo.png' className='w-16'></img>
        <p></p></div>
        <ul className="flex gap-20">
          <button onClick={() => navigate('/')}>
            <li>Home</li>
          </button>

          <button onClick={() => navigate('/community')}>
            <li>Community</li>
          </button>
          <button onClick={() => navigate('/mealplanner')}>
            <li>Meal Planner</li>
          </button>
          <button onClick={() => navigate('/search')}>
            <li>Search</li>
          </button>
        </ul>
        <div className="sign-in">
          <button onClick={() => navigate('/login')}>Sign In</button>
        </div>
      </div>
      <Recipe />
      <Rank />
      <Menu />
      <Search />
      <Component />
    </div>
  );
};

export default Navbar;
