import React, { useEffect, useState } from "react";



const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:1337/api/books?populate=*")
          .then((res) => res.json())
          .then((data) => setBooks(data.data));
      }, []);
   
   
    return (
      <>
      <h1 className='font-bold text-black text-center text-4xl py-5 lg:text-6xl' >Books</h1>
      <section className='grid grid-cols-1 gap-10 px-5 pb-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {books.map((book) => {
              const {title, author, pages, rating, labels, image} = book.attributes
              return (
                  
                <article className="bg-gray-100 py-5 px-10 rounded-lg sm:px-5" key={book.id}>
                  <div>                                                            
                    <img width={300} height={180}src={`http://localhost:1337${image.data.attributes.formats.thumbnail.url}`} alt={image.data.attributes.alternativeText} className='block mx-auto w-2/3'/>
                  </div>
                  <div>
                    <h3 className='font-bold nt-2 my-2 text-2xl'>{title}</h3> 
                    <p>
                      <span className='font-bold'>Author: </span> {author}
                    </p>                               
                  </div>
                  <ul className="mb-4">                                
                    <li>                                    
                      <span className='font-bold'>Rating: </span> {rating}
                    </li>
                    <li>                                    
                      <span className='font-bold'>Genre: </span> {labels.data[0].attributes.name}
                    </li>
                      
                    <li>                                    
                      <span className='font-bold'>Pages: </span> {pages}
                    </li>

                  </ul>
                </article>
                  
              )
          })}
      </section>
  </>
    );
}

export default Books
