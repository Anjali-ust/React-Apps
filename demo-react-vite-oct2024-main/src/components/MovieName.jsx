import { useState } from "react";

function MovieName() {
  const [movie, setMovie] = useState("Avengers: End Game");
  const [toggleMovie, setToggleMovie] = useState(false);
  function handleClick() {
    setToggleMovie(!toggleMovie);
  }
  return (
    <>
      <button onClick={handleClick}>Click</button>
      {toggleMovie ? movie : ""}
    </>
  );
}

export default MovieName;
