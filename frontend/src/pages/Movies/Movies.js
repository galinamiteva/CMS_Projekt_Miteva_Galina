import React, { useEffect, useState } from "react";

const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("http://localhost:1337/api/movies?populate=*")
          .then((res) => res.json())
          .then((data) => setMovies(data.data));
      }, []);

      console.log(movies);

    return (
        <>
          <h1 className='font-bold text-black text-center text-4xl py-5 lg:text-6xl' >Movies</h1>
          <section className='grid grid-cols-1 gap-10 px-5 pb-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {movies.map((movie)=>{
              const {title, releaseDate, lenght, grades, labels, image} = movie.attributes

              return (
                <article className="bg-gray-100 py-5 px-10 rounded-lg sm:px-5" key={movie.id}>
                  <div>                                                            
                    <img width={300} height={180}src={`http://localhost:1337${image.data.attributes.formats.thumbnail.url}`} alt={image.data.attributes.alternativeText} className='block mx-auto w-2/3'/>
                  </div>
                  <div>
                    <h3 className='font-bold nt-2 my-2 text-2xl'>{title}</h3> 
                    <p>
                      <span className='font-bold'>Release Date: </span> {releaseDate}
                    </p>                               
                  </div>
                  <ul className="mb-4">                                
                    <li>                                    
                      <span className='font-bold'>Grades: </span> {grades}
                    </li>
                    <li>                                    
                      <span className='font-bold'>Genre: </span> {labels.data[0].attributes.name}
                    </li>
                      
                    <li>                                    
                      <span className='font-bold'>Lenght: </span> {lenght} min
                    </li>

                  </ul>
                </article>
              )
             
            })}
            
          </section>
        </>

      
        
    )
}

export default Movies
