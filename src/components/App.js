import React, { useState } from "react";
import Router from "./Router";
import firebase from "../fbase";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <Router isLoggedIn={isLoggedIn} />
    </>
  );
};

export default App;
