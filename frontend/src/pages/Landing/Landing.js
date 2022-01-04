import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

const Landing = () => {
    const [labels, setLabels] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        fetch("http://localhost:1337/api/labels")
          .then((res) => res.json())
          .then((data) => setLabels(data.data));
      }, []);

      
    
    const handleClick = (event) => {
        if (typeof event.target.value === "string") {
        navigate(`/${event.target.value}`);
        }

        if (typeof event.target.value === "number") {
        navigate(`/labels/${event.target.value}`);
        }
    };

    return (
      <div class="h-full w-full">
        
          
          <h2 className='font-bold text-black text-center text-3xl py-5 lg:text-5xl' >Welcome!</h2>
  
          <h5 className='text-gray-700 text-center text-2xl py-5 lg:text-3xl'  >
          Here is our recommendation of movies and books.
          </h5>
    
          <h5 className='text-gray-700 text-center text-2xl py-5 lg:text-3xl'>
          You can choose to search for movies, books or specific genre.
          </h5>
    
          <div className = 'text-center'>
            <h3 className=' text-gray-800 text-center text-3xl py-5 lg:text-4xl'>What do you choose to watch?</h3>
            <div class="inline-flex ">
              <button onClick={handleClick} value="books" class="bg-green-100 hover:bg-green-700 text-3xl lg:text-4xl hover:text-white text-gray-800 font-bold py-3 px-5 rounded-2">
                Books
              </button>
              <button onClick={handleClick} value="movies" class="bg-green-100 hover:bg-green-700 text-3xl lg:text-4xl hover:text-white text-gray-800 font-bold py-3 px-5 rounded-r">
                Movies
              </button>
              </div>
            <h4 className='font-bold text-gray-800 text-center text-3xl py-5 lg:text-4xl' >Labels</h4>
            <ul class="h-64 grid grid-rows-4 grid-flow-col gap-5">
              {labels ? (
                labels.map((label) => (
                  <li class="bg-green-100 hover:bg-green-700 text-2xl lg:text-2xl hover:text-white text-gray-800 font-bold py-3 px-5 rounded" key={label.id} value={label.id} onClick={handleClick}>
                    {label.attributes.name}
                  </li>
                ))
              ) : (
                <section className="monseratt text-lg text-gray-100 text-center">
                  <span>&#9888;</span>
                  <p>Loading.....</p>
                  </section>
              )}
            </ul>
          </div>
        
      </div>
    )
}

export default Landing
