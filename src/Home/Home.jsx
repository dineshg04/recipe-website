import React from 'react';
import manga from '../assets/manga.jpg';

export const Home = () => {
  return (
    <div className="home-container p-8">
      <div className="post mb-9">
        <p className="border w-[150px] text-center mb-1 rounded-[50px]">
          Post your recipe
        </p>
        <textarea
          placeholder="What's on your mind?"
          name=""
          id=""
          cols="30"
          rows="10"
          className="w-[65%] h-[80px] border p-4 outline-none resize-none"
        ></textarea>
        <div className="button text-end w-[65%]">
          <button className="bg-red-500 text-white px-5 py-1 rounded-[20px]">
            Post
          </button>
        </div>
      </div>
      <div className="gap mb-[10px]">
        <div className="user-card border w-[65%] flex items-center p-5 rounded-[20px]">
          <div className="img-container w-[100px] rounded-[20px] mr-[15px]">
            <img src={manga} alt="" className="rounded-[20px]" />
          </div>
          <div className="user-content">
            <div className="wrap flex justify-between">
              <h1 className="font-bold text-sm">Dhanush</h1>
              <p className="text-[10px] mr-4 font-semibold opacity-50">
                19th feb 2023
              </p>
            </div>
            <p className="text-sm opacity-60">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              eius ipsum delectus illo libero facilis laborum explicabo.
              Cupiditate libero iusto, provident at pariatur architecto tempora
              fugit recusandae ullam quam voluptate? Accusantium eius laboriosam
              reiciendis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
