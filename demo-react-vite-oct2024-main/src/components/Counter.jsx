import { useState } from "react";

export default function Counter() {
  //let count = 0; // put this count in the state of the component
  let [count, setCount] = useState(0);
  let [movieName, setMovieName] = useState("Avengers: End Game");

  function handleIncrement() {
    //count++; // should not change the count variable directly,
    //instaed use the setCount function
    // setCount(count + 1);
    // setCount(count + 1); // here count is stale
    // setCount(count + 1);
    
    //setCount(count + 3);

    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    console.log(count);
  }

  function handleDecrement() {
    //count--; // should not change the count variable directly,
    //instaed use the setCount function
    // setCount(count - 1);
    // setCount(count - 1); // here count is stale
    // setCount(count - 1); // here count is stale
    
    //setCount(count - 3);

    setCount((count) => count - 1);
    setCount((count) => count - 1); // here count is not stale
    setCount((count) => count - 1); // here count is not stale

    console.log(count);
  }

  return (
    <>
      <div className="container m-5 p-5">
        <h2>
          <button className="btn btn-warning" onClick={handleDecrement}>
            ➖ BY 3
          </button>
          <span className="mx-5 badge bg-success">{count}</span>
          <button className="btn btn-warning" onClick={handleIncrement}>
            ➕ BY 3
          </button>
        </h2>
      </div>
    </>
  );
}
