import React from 'react';
import img from '../assets/community.png';
import { useNavigate } from 'react-router-dom';

export const Rank = () => {
  const navigate = useNavigate();
  return (
    <div className="rank-container p-[150px] flex items-center gap-9">
      <div className="content">
        <h2 className="text-8xl font-semibold">Connect With People</h2>
        <p className="text-3xl mt-3 mt-5">
          Share your Recipes, photos and cooking tips
        </p>
        <div className="buttons mt-5">
          <button
            className="border rounded-xl py-3 px-8 mr-2 text-2xl"
            onClick={() => navigate('/community')}
          >
            Join Our Community
          </button>
        </div>
      </div>
      <div className="img-container flex justify-around h-auto  mt-[50px] mb-[20px]">
        <div className="img-1 h-[400px] w-auto rounded-xl">
          <img src={img} alt="" className="h-[100%]" />
        </div>
      </div>
    </div>
  );
};
export default Rank;
