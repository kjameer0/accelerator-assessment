import { Link } from "react-router-dom";


function Anime({ anime, id }) {
  const {name, description} = anime
  return (
    <div className="anime-item" key={id}>
      <p>{name}</p>
      <p>{description}</p>
    </div>
  );
}

export default Anime;
