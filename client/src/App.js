import { useEffect, useState } from "react";

import authService from "./services/auth";

import NavBar from "./components/NavBar";
import LoginForm from "./components/LoginForm";
import Dashboard from "./views/Dashboard";
import Dropdown from "./components/Dropdown";

function App() {
  const [error, setError] = useState(false);
  const [user, setUser] = useState(null);

  // on app load, determine if the user is logged in or not
  // store the JWT in local storage (this inst the safest option)
  useEffect(() => {
    const loggedUser = authService.getUser();
    console.log(loggedUser);

    if (loggedUser) {
      setUser(JSON.parse(loggedUser));
    }
  }, []);

  const handleLogin = async ({ email, password }) => {
    try {
      const loggedUser = await authService.login({ email, password });
      console.log(loggedUser);
      localStorage.setItem("user", JSON.stringify(loggedUser));

      setUser(loggedUser);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="App">
      <NavBar user={user} />
      {user ? <Dashboard /> : <LoginForm handleLogin={handleLogin} />}
      <Dropdown
        dropdownState={{
          closed: true,
        }}
      >
        <a>Dude</a>
        <a href="">Man</a>
        <a href="">Gorl</a>
      </Dropdown>
    </div>
  );
}

export default App;
