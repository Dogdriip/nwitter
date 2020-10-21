import React, { useState, useEffect } from "react";
import Router from "components/Router";
import { authService } from "fbase";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    authService.currentUser !== null
  );
  const [init, setInit] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      setIsLoggedIn(user !== null);
    });
    setInit(true);
  }, []);

  return (
    <>
      {init ? <Router isLoggedIn={isLoggedIn} /> : "Initializing..."}
      <footer>&copy; {new Date().getFullYear()} nwitter</footer>
    </>
  );
};

export default App;
