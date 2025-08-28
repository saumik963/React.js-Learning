import "./App.css";
import Component from "./components/card";
import ConditionalRendaring from "./components/CONDITIONAL_RENDARING/Condition";
import EventHandeler from "./components/EVENT_HANDELER_CLASS/Event_Handeler";
import EventBinding from "./components/EVENT_BINDING/Event_Binding";
import HooksUseState from "./components/HOOKS_USESTATE/HooksUsestate";
import HooksUseState2 from "./components/HOOKS_USESTATE/HooksUseState2";
import Form from "./components/FORM/Form";
import Parent from "./components/STATE_LIFTING/Parent";
import Home from "./components/TODO/Home";

let {Card,Welcome,Todo,Counter}=Component

const users = [
  {
    fullName: "Reed Richer",
    age: 32,
    phones: [{ home: "34234425" }, { office: "34656442" }],
  },
  {
    fullName: "Ben",
    age: 31,
    phones: [{ home: "342343434" }, { office: "564656442" }],
  },
  {
    fullName: "Jonny Strom",
    age: 32,
    phones: [{ home: "24234425" }, { office: "14656442" }],
  },
];

function App() {
  return (
    <div className="App">
      <h1>Nested Maping List</h1>
      <div className="card_container">
        {users.map((user, index) => (
          <article key={index} className="cardStyle">
            <h3>{user.fullName}</h3>
            <h3>{user.age}</h3>
            {user.phones.map((phone, index) => (
              <div key={index}>
                <p>{phone.home}</p>
                <p>{phone.office}</p>
              </div>
            ))}
          </article>
        ))}
      </div>
    </div>
  );
}

const AllComponentLoader = () => {
  return (
    <>
      <div className="app_style">
        <App />,
      </div>

      {/* <Card name="This is class component" /> */}
      {/* <Welcome />
  <Todo />
  <Counter /> */}
      <div className="card_container">
        {/* <ReactBootstrap />
  <ReactBootstrap /> */}
      </div>
      <div>
        {/* <ConditionalRendaring />
  <EventHandeler />
  <EventBinding /> */}
        <HooksUseState />
        <HooksUseState2 />
      </div>
      <div>
        {/* <Form /> */}
        <Parent />
      </div>
      <div>
        <Home />
      </div>
    </>
  );
};

export default AllComponentLoader;
