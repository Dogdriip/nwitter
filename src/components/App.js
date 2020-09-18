import React, { useState } from "react";
import Router from "components/Router";
import fbase from "fbase";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <Router isLoggedIn={isLoggedIn} />
    </>
  );
};

export default App;
