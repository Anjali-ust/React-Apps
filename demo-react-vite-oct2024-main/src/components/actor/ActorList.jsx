import ActorItem from "./ActorItem";

function ActorList() {
  let allActors = [
    {
      actorId: 101,
      actorFirstname: "Rupert",
      actorLastname: "Grint",
    },
    {
      actorId: 102,
      actorFirstname: "Emma",
      actorLastname: "Watson",
    },
    {
      actorId: 103,
      actorFirstname: "Daniel",
      actorLastname: "Radcliff",
    },
  ];

  let mappedAllActors = allActors.map((eachActor) => (
    <ActorItem data={eachActor}></ActorItem>
  ));

  return (
    <>
      <h3>LIST OF ACTORS</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>FIRSTNAME</th>
            <th>LASTNAME</th>
          </tr>
        </thead>
        <tbody>{mappedAllActors}</tbody>
      </table>
    </>
  );
}
export default ActorList;
