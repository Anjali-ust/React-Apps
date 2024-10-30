let ButtonClick = function () {
  let count = 0;
  function handleClick() {
    console.log("clicked");
    console.log(count);
    count++;
  }

  return (
    <>
      <div className="container m-5 p-5">
        <button className="btn btn-primary" onClick={handleClick}>
          Click Me..
        </button>
        <div className="bg-success text-light">{count}</div>
      </div>
    </>
  );
};
export default ButtonClick;
