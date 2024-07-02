import React from 'react';
import img from '../assets/todo.png';
import { useNavigate } from 'react-router-dom';

export const Menu = () => {
  const navigate = useNavigate();
  return (
    <div className="rank-container p-[150px] flex items-center gap-9">
      <div className="img-conatiner flex justify-around h-auto  mt-[10px]">
        <div className="img-1  h-[400px] w-auto rounded-xl">
          <img src={img} alt="" className="h-[100%]" />
        </div>
      </div>
      <div className="content">
        <h2 className="text-8xl font-semibold ml-4">Meal Planner</h2>
        <p className="text-3xl ml-5 mt-3">
          Create weekly menus and plan accordingly
        </p>
        <div className="buttons mt-9">
          <button
            className="border rounded-xl py-3 px-8 mr-2 ml-3 text-2xl"
            onClick={() => navigate('mealplanner')}
          >
            Plan Now
          </button>
        </div>
      </div>
    </div>
  );
};
export default Menu;
