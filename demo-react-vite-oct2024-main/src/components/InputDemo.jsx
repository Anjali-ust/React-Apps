import { useState } from "react";

function InputDemo() {
  //let data = "hello";
  const [data, setData] = useState("");
  function handleChange(event) {
    setData(event.target.value);
    console.log(event);
    console.log(event.target.value);
  }
  return (
    <>
      <div className="container m-5 p-5">
        <input
          type="text"
          value={data}
          name="testData"
          placeholder="trial"
          required
          onChange={(e) => handleChange(e)}
        ></input>
        {/* <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
        ></input> */}
        <div>{data}</div>
      </div>
    </>
  );
}

export default InputDemo;
