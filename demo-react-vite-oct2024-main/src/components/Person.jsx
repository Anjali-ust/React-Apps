function Person() {
  let onePerson = {
    personId: 101,
    personFirstname: "Emma",
    personLastname: "Watson",
  };
  return (
    <>
      <h3>Person Component</h3>
      <h6>Person id : {onePerson.personId}</h6>
      <h6>Person Firstname : {onePerson.personFirstname}</h6>
      <h6>Person Lastname : {onePerson.personLastname}</h6>
    </>
  );
}

export default Person;
