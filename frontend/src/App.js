import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Error from './components/Error/Error';
import Books from './pages/Books/Books';
import Labels from './pages/Labels/Labels';
import Movies from "./pages/Movies/Movies";
import Landing from "./pages/Landing/Landing";
import All from "./pages/All/All";

function App() {
  const location = useLocation();
  

  return (
    <div className="App" >
      <Header />

      {location.pathname !== "/" ? <Nav /> : null}
      <main>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="books" element={<Books/>}/>
          <Route path="labels/:id" element={<Labels/>}/>
          <Route path="movies" element={<Movies/>}/>
          <Route path="all" element={<All/>}/>         
          <Route path="*" element={<Error/>}/>

        </Routes>
      </main>

    </div>
  );
}

export default App;
