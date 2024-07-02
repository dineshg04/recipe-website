import { useState, useEffect } from 'react';

const Recipie = () => {
  const [dataInfo, setDataInfo] = useState([]);
  const queryParameters = new URLSearchParams(window.location.search);
  const type = queryParameters.get('id');
  console.log(type);
  useEffect(() => {
    fetch('https://recipie-api-3tr8.onrender.com/api/v1/search')
      .then((response) => response.json())
      .then((data) => setDataInfo(data.result));
  }, []);

  return (
    <div>
      {dataInfo.map((e) => {
        if (e._id === type) {
          return (
            <ul>
              {e.ingredients.map((item, index) => (
                <li key={index} className="mb-2">
                  {item}
                </li>
              ))}
            </ul>
          );
        }
      })}
    </div>
  );
};
export default Recipie;
