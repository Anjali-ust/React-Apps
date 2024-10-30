import { useState } from "react";

function PersonClick() {
  const [togglePerson, setTogglePerson] = useState(false);
  const [person, setPerson] = useState({
    personId: 205,
    personFirstname: "Will",
    personLastname: "Smith",
    personImageUrl:
      "https://images.unsplash.com/photo-1641716162046-e6fe7ce76818?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2lsbCUyMHNtaXRofGVufDB8fDB8fHww",
  });

  function handlePerson() {
    setTogglePerson(!togglePerson);
  }
  let content = (
    <div className="card m-3">
      <img
        className="img-src-top"
        width="300px"
        height="200px"
        src={person.personImageUrl}
      ></img>
      <div className="card-title">
        <h5>
          {person.personFirstname} {person.personLastname}
        </h5>
      </div>
      <div className="card-text">
        <h6>Person ID: {person.personId}</h6>
      </div>
    </div>
  );
  return (
    <>
      <div className="container m-5 px-5">
        <button className="btn btn-warning" onClick={handlePerson}>
          Display Person
        </button>
        {togglePerson ? content : ""}
      </div>
    </>
  );
}

export default PersonClick;
