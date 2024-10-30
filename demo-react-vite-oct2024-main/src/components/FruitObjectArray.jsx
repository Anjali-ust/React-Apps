function FruitObjectArray() {
  let allFruits = [
    {
      fruitId: 201,
      fruitName: "Apple",
      fruitEmoji: "🍎",
    },
    {
      fruitId: 202,
      fruitName: "Orange",
      fruitEmoji: "🍊",
    },
    {
      fruitId: 203,
      fruitName: "Banana",
      fruitEmoji: "🍌",
    },
  ];
  let mappedAllFruits = allFruits.map((eachFruit) => (
    <li key={eachFruit.fruitId}>
      {eachFruit.fruitEmoji}, {eachFruit.fruitId} : {eachFruit.fruitName}
    </li>
  ));
  return (
    <>
      <h2>FruitObjectArray Component!</h2>
      <h4>List Of Fruits</h4>
      <ul>{mappedAllFruits}</ul>
    </>
  );
}

export default FruitObjectArray;
