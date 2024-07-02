import React from 'react'

export const NavbarStatic = () => {
  return (
    <div className="fixed navbar-container flex justify-between items-center p-2 mt-2 px-9">
      <div className="logo font-bold flex justify-center items-center w-20">
        <img src="/public/logo.png" className="w-16"></img>
        <p></p>
      </div>
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
  );
}

export default NavbarStatic;