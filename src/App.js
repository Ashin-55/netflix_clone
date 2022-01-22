import React from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/NavBar/Navbar';
import RowPost from './components/RowPost/RowPost';
import {action,orginals,ComedyMovies,HorrorMovies,RomanceMovies,Documentaries} from "./url"

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <RowPost url={orginals} title="Netflix originals"/>
     <RowPost url={action} title="Action" isSmall/>
     <RowPost url={ComedyMovies} title="ComedyMovies" isSmall/>
     <RowPost url={HorrorMovies} title="HorrorMovies" isSmall/>
     <RowPost url={RomanceMovies} title="RomanceMovies" isSmall/>
     <RowPost url={Documentaries} title="Documentaries" isSmall/>
    </div>
  );
}

export default App;
