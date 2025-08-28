import React from "react";
import Card from "./components/Card";
import Data from "./data.json";

function App() {
  let items = [];
  // for (let x = 0; x < Data.length; x++) {
  //       items.push(<Card titleText={Data[x].title} descText={Data[x].desc} />)
  // }

  items = Data.map((item, index) => (
    <Card key={index} titleText={item.title} descText={item.desc} />
  ));

  console.log(Data);
  return (
    <div>
      <h1 className="headingStyle">Todo APP</h1>
      {items}
      <h1 className="headingStyle">Todo List</h1>
    </div>
  );
}

export default App;
