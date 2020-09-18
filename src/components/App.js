import React, { useState } from "react";
import Router from "components/Router";
import { authService } from "fbase";

const App = () => {
  console.log(authService.currentUser);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <Router isLoggedIn={isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()} nwitter</footer>
    </>
  );
};

export default App;
