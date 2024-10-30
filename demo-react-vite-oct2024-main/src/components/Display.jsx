import DisplayProps from "./DisplayProps";

function Display() {
  let name = "Mark";
  let allColors = ["RED", "BLUE", "GREEN"];
  return (
    <>
      <h3>Display Component!</h3>
      <p>Hello Bob!</p>
      <p>Hello {name}!</p>
      <p>Colors: {allColors}</p>
      <DisplayProps name="Will" greeting="Hi" emoji="👋"></DisplayProps>
      <DisplayProps name="Raj" greeting="Vanakkam" emoji="🙏"></DisplayProps>
      <DisplayProps
        name="Kumar"
        greeting="Namaskaram"
        emoji="🙏"
      ></DisplayProps>
    </>
  );
}

export default Display;
