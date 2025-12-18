import React from "react";
import NavBar from "./components/NavBar/NavBar";
import "../src/App.css";
import Banner from "./components/Banner/Banner";
import RowPost from "./components/Row Post/RowPost";
import { originals, ActionMovies,ComedyMovies,HorrorMovies,Documentaries,RomanceMovies } from "./Urls";

export default function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={ActionMovies}  title='Action Movies' isSmall/>
      <RowPost url={HorrorMovies}  title='Horror Movies' isSmall/>
      <RowPost url={ComedyMovies}  title='Comedy Movies' isSmall/>
      <RowPost url={RomanceMovies}  title='Romance Movies' isSmall/>
      <RowPost url={Documentaries}  title='Documentaries' isSmall/>
    </div>
  );
}


