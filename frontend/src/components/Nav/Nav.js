import React, { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";

export default function Header() {
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/labels")
      .then((res) => res.json())
      .then((data) => setLabels(data.data));
  }, []);

  return (
    <nav class=" bg-green-100 text-center " >
      <div class="flex  items-center justify-between  bg-green-100 flex-no-wrap text-center p-6">
     
        <NavLink className='flex-1 flex-shrink-0 bg-green-100 hover:bg-green-700 text-2xl lg:text-2xl hover:text-white active:bg-green-700 text-gray-800 font-bold py-2 mr-6 px-3 rounded-2' to="/books">Books</NavLink>
        <NavLink className='flex-1 flex-shrink-0 bg-green-100 hover:bg-green-700 text-2xl lg:text-2xl hover:text-white active:bg-green-700 text-gray-800 font-bold py-2 mr-6 px-3 rounded-2' to="/movies">Movies</NavLink>
        <NavLink className='flex-1 flex-shrink-0 bg-green-100 hover:bg-green-700 text-2xl lg:text-2xl hover:text-white active:bg-green-700 text-gray-800 font-bold py-2 mr-6 px-3 rounded-2' to="/all">All</NavLink>
      </div>
      <div flex items-center justify-between my-16 bg-green-100 text-center  >
        {labels ? (
          labels.map((label) => (
            <NavLink className='flex-1 flex-shrink bg-green-100 hover:bg-green-700 text-2xl text-center   lg:inline-block lg:mt-0  lg:text-2xl hover:text-white active:bg-green-700 text-gray-800 font-bold py-3  px-4 rounded-2' key={label.id} to={`/labels/${label.id}`}>
              {label.attributes.name}
            </NavLink>
          ))
        ) : (
          <section className="monseratt text-lg text-gray-100 text-center">
            <span>&#9888;</span>
            <p>Loading.....</p>
          </section>
        )}
      </div>
    </nav>
  );
}
