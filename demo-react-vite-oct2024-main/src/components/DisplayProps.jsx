function DisplayProps({ name, greeting, emoji }) {
  // instaed of destructuring the props at line 4, we can destructuring while receiving it as an argument
  //   let myname = props.name;
  //   let mygreeting = props.greeting;
  //   let { name, greeting, emoji } = props; // object destructuring, instead of line 2 and 3
  return (
    <>
      <h3>This is DisplayProps Component!</h3>
      <h4>
        {/* {mygreeting} {myname} */}
        {greeting} {name} {emoji}
      </h4>
    </>
  );
}

export default DisplayProps;
