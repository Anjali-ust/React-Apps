function Color() {
  let allColors = ["RED", "BLUE", "GREEN"];
  let mappedAllColors = allColors.map((eachColor) => (
    <li key={eachColor}>{eachColor}</li>
  ));
  return (
    <>
      <h3>Color Component!</h3>
      <h5>{allColors}</h5>
      <h5>Listing of allColors...</h5>
      <ul>
        {allColors.map((eachColor) => (
          <li key={eachColor}>{eachColor}</li>
        ))}
      </ul>
      <h5>Neater way of listing allColors...</h5>
      <ol>{mappedAllColors}</ol>
    </>
  );
}
export default Color;
