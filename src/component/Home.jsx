import React from 'react';
import manga from '../assets/manga.jpg';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const Home = () => {

     const initialValues = {
       email: '',
       password: '',
     };

     const api = axios.create({
       baseURL: 'https://recipie-api-3tr8.onrender.com/api/v1',
     });

     const [values,setValues] = useState(initialValues)
     
     const handleInputChange = (e) => {
       const { name, value } = e.target;
       setValues({
         ...values,
         [name]: value,
       });
     };

     const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await api.post('/jobs',{values});
            console.log(data)
        } catch (error) {
            console.log(error)
        }
     }

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://recipie-api-3tr8.onrender.com/api/v1/jobs/all')
      .then((res) => res.json())
      .then((data) => setData(data.job));
    console.log(data);
  }, []);


  return (
    <div className="home-container p-8">
      <div className="post mb-9">
        <p className="border w-[150px] text-center mb-1 rounded-[50px]">
          Post your recipe
        </p>
        <div className="flex flex-col gap-2 ">
          <input
            type="search"
            name="title"
            placeholder="Type something...."
            className="w-[65%] border p-2 outline-none resize-none"
            onChange={handleInputChange}
          ></input>
          <textarea
            placeholder="What's on your mind?"
            name="content"
            id=""
            cols="30"
            rows="10"
            onChange={handleInputChange}
            className="w-[65%] h-[80px] border p-4 outline-none resize-none"
          ></textarea>
          <div className="button text-end w-[65%]">
            <button className="bg-red-500 text-white px-5 py-1 rounded-[20px]" onClick={handleSubmit}>
              Post
            </button>
          </div>
        </div>
      </div>

      {data.map((e) => {
        return (
          <div className="user-card border w-[65%] flex items-center p-5 rounded-[20px]">
            <div className="img-container w-[100px] rounded-[20px] mr-[15px]">
              <img src={manga} alt="" className="rounded-[20px]" />
            </div>
            <div className="user-content">
              <div className="wrap flex justify-between">
                <h1 className="font-bold text-sm">{e.title}</h1>
                <p className="text-[10px] mr-4 font-semibold opacity-50">
                  19th feb 2023
                </p>
              </div>
              <p className="text-sm opacity-60">{e.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
