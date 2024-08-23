import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
// import Button from "./components/Button";
import Input from "./components/Input";
import Container from "./components/Container";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import Box from "./components/context/Box";
import { theme } from "./components/context/theme";
import { UserContextProvider } from "./components/context/UserContext";
import User from "./components/context/User";
import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile";
import List from "./components/generics/List";
import RandomNumber from "./components/restriction/RandomNumber";
import Toast from "./components/templateLiterals/Toast";
import Button from "./components/html/Button";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Cent",
    },
    {
      first: "princess",
      last: "Diana",
    },
  ];

  return (
    <div className="App">
      {/* <Greet name='Hello Aleem' messageCount={10} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList name={nameList} /> */}
      {/* <Status status='fetching' /> */}
      {/* <Heading>Heading Text Changed</Heading> */}
      {/* <Oscar>
        <Heading>Oscar goes to america</Heading>
      </Oscar> */}
      {/* <Button handleClick={(event, id) => {
        console.log("Button Clicked", event, id);
      }} /> */}
      {/* <Input value="" handleChange={(event) => console.log(event)} /> */}
      {/* <Container styles={{border: '1px solid black', padding: '1rem'}} /> */}

      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}

      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}
      {/* <Private isLoggedIn={false} component={Profile} /> */}
      {/* <List items={["Batman", "superman", "Spiderman"]} onClick={(item) => console.log(item)} />
      <List items={[1, 2, 3, 4]} onClick={(item) => console.log(item)} />
      <List items={[
        {
          id: 1,
          first: "John",
          last: "Doe"
        },
        {
          id: 2,
          first: "John",
          last: "Doe"
        },
        {
          id: 3,
          first: "John",
          last: "Doe"
        }
      ]} onClick={(item) => console.log(item)} /> */}

      {/* <RandomNumber value={20} isPositive={true} /> */}
      {/* <Toast position='center' /> */}

      <Button variant="primary">Primary Button</Button>
    </div>
  );
}

export default App;
