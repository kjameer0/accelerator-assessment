import Anime from "./Anime";
import { useEffect, useState } from "react";
import '/Users/eliwills/Desktop/Pursuit/module-3/AC-accelerator-assessment/frontend/src/Components/AnimesStyling.css'

function Animes() {
  const API = process.env.REACT_APP_BASE_URL
  const [animedata, setAnimeData]= useState([])

  useEffect(()=> {
    fetch(API)
    .then(res => res.json())
    .then(res => setAnimeData(res))
    .catch(err => console.log(err))
  }, [])

  console.log(animedata)
  

  return (
    <section className="index" id="anime-list">
      {animedata.map(anime => {
        return <Anime key={anime.id} anime={anime} id={anime.id}/>
      })}
    </section>
  );
}

export default Animes;
