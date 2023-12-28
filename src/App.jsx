import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

// import React from "react";
const App = () => {
  return (
    <UserContextProvider>
      <h1>My name is Waqas Khursheed</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
};

export default App;
