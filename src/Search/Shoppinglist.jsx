import React, { useState } from 'react';
import NavbarStatic from '../Home/NavbarStatic';

const ShoppingList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [day, setDay] = useState('');

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleDayChange = (event) => {
    setDay(event.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '' && day.trim() !== '') {
      setTasks([...tasks, { newTask, day }]);
      setNewTask('');
      setDay('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <div className="flex justify-center  items-center backdrop-blur-sm	h-screen">
        <div className="w-[45%] border p-8  rounded-lg shadow-2xl ">
          <h3 className="font-bold p-1 pl-3 pb-5 pt-3 text-8xl ">
            Meal Planner
          </h3>
          <div className="flex">
            <form className="pl-3 flex gap-4">
              <input
                type="search"
                placeholder="Type the recipe"
                value={newTask}
                onChange={handleInputChange}
                className="block w-[150px] p-2 pl-2 text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-gray-300"
              />
              <div className="flex  flex-col gap-6 px-4">
                <select
                  value={day}
                  onChange={handleDayChange}
                  className="block w-[150px] p-2 pl-4 text-sm text-gray-500 border border-gray-300 rounded-lg focus:outline-gray-300"
                  name="day"
                >
                  <option value="">Select the day</option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
                </select>
              </div>
              <button
                onClick={addTask}
                className="text-white bg-orange-600 hover:bg-orange-400 focus:outline-none font-medium rounded-lg text-sm p-2 px-4 pr-4"
              >
                Add
              </button>
            </form>
          </div>

          <div className="gap-12">
            <div className="flex gap-40 mt-5">
              <div className="font-semibold ml-3">Recipes</div>
              <div className="font-semibold ">Day</div>
              <div className="font-semibold ml-6">Delete</div>
            </div>
            <ol>
              {tasks.map((task, index) => (
                <li key={index}>
                  <div className="flex gap-40 pt-4 ">
                    <span className="ml-3">{task.newTask}</span>
                    <span className="">{task.day}</span>
                    <button
                      className="delete-button text-white bg-orange-600 hover:bg-orange-400 focus:outline-none font-medium rounded-lg text-sm p-2 px-4  "
                      onClick={() => deleteTask(index)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingList;
