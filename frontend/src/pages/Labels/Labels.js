import React, { useEffect, useState } from "react";

import { useLocation, useParams } from "react-router-dom";


const Labels = () => {

    const [label, setLabel] = useState({});
    const [books, setBooks] = useState([]);
    const [movies, setMovies] = useState([]);

    const location = useLocation();
    const id = useParams();
    const labelId = JSON.stringify(id);  
    const labelID = JSON.parse(labelId)  
    
   

    useEffect(() => {
       
        
    
        fetch(
          `http://localhost:1337/api/labels/${labelID.id}?populate[0]=books&populate[1]=movies`
        )
          .then((res) => res.json())
          .then((data) => {
            setLabel(data.data.attributes);
            setBooks(data.data.attributes.books.data);
            setMovies(data.data.attributes.movies.data);
          });
      }, [labelID.id, location.pathname]);


    return (
  <section className = 'text-center'>
       <h3 class="uppercase font-bold text-black text-center text-4xl py-5 mt-12 lg:text-6xl">{label.name}</h3>
       <p className='text-gray-700 text-center text-1xl px-32  lg:text-2xl mt-8'>{label.description}</p>
       
       <div className="flex ">
        <section  className="flex-1" >
            <h2 className='font-bold nt-2 my-12 text-4xl'>Books</h2>
            {books ? (
              books.map((book) => (
                <div key={book.id}>
                  <h3 className='font-bold nt-2 my-2 text-2xl'>{book.attributes.title}</h3>
                  
                  <p>
                    <span className='font-bold'>Author: </span> {book.attributes.author}
                  </p>
                  <p>
                    <span className='font-bold'>Pages: </span> {book.attributes.pages}
                  </p>
                  <p>
                    <span className='font-bold'>Rating: </span> {book.attributes.rating}
                  </p>
                  
                </div>
              ))
            ) : (
              <section className="monseratt text-lg text-gray-100 text-center">
              <span>&#9888;</span>
                <p>Loading.....</p>
            </section>
            )}
          </section>
  
          <section  className="flex-1 mb-12">
            <h2  className='font-bold nt-2 my-12 text-4xl'>Movies</h2>
            {movies ? (
              movies.map((movie) => (
                <div key={movie.id}>
                  <h3  className='font-bold nt-2 my-2 text-2xl'>{movie.attributes.title}</h3>
                  <p>
                    <span className='font-bold'>Release Date: </span> {movie.attributes.releaseDate}
                  </p>
                  <p>
                    <span className='font-bold'>Lenght: </span> {movie.attributes.lenght} min
                  </p>
                  <p>
                    <span className='font-bold'>Grades: </span> {movie.attributes.grades}
                  </p>
                
                </div>
              ))
            ) : (
              <section className="monseratt text-lg text-gray-100 text-center">
              <span>&#9888;</span>
                <p>Loading.....</p>
              </section>
            )}
          </section>
       </div>
  </section>
  )
}

export default Labels
