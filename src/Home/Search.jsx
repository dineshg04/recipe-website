import React from 'react'
import img from '../assets/shopping.png'
import { useNavigate } from 'react-router-dom'

export const Search = () => {
  const navigate = useNavigate()
  return (
    <div className="rank-container p-[150px] gap-9">
        <div className="content">
            <h2 className='text-8xl font-semibold'>Shopping List Generator</h2>
            <p className='text-3xl ml-5 mt-7'>Generate Recipes based on selected recipes and meal plans</p>
            <div className="buttons mt-9">
            <button className='border rounded-xl py-3 px-8 mr-2 text-2xl' onClick={() => navigate('/search')}>Find your recipe</button>
            </div>
        </div>
        <div className="img-conatiner flex justify-around h-auto  mt-[50px]">
            <div className="img-1 h-[400px] w-[500px] rounded-xl">
            <img src={img} alt="" className='h-[100%]'/>
            </div>
        </div>
        </div>
  )
}
export default Search;