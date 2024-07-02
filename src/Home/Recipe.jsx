import React from 'react'
import img from '../assets/dish.png'
export const Recipe = () => {
  
  const handleScroll = () => {
    window.scrollTo({
      top: document.body.scrollHeight - 2500,
      behavior: 'smooth',
    });
  };
  return (
    <div className="Container flex flex-col items-center justify-center h-auto mt-8">
      <div className="content text-center ">
        <h1 className="text-7xl max-w-4xl font-semibold">
          Recipe Sharing and Meal Planning
        </h1>
        <p className="text-sm max-w-4xl mt-5">
          We provide social platform where users can share recipes, photos, and
          cooking tips, along with a meal planner that enables the creation of
          weekly menus and a shopping list generator based on selected recipes
          and meal plans.
        </p>
        <button className="join-free bg-red-500 text-white py-2 px-4 mt-4" onClick={handleScroll}>
          Explore Now!
        </button>
      </div>
      <div className="img-container  rounded-[10px] w-[400px]">
        <img src={img} alt="Environment" className="rounded-[15px]" />
      </div>
    </div>
  );
}

export default Recipe;