import { useEffect, useState } from "react";

import authService from "./services/auth";

import NavBar from "./components/NavBar";
import LoginForm from "./components/LoginForm";
import Dashboard from "./views/Dashboard";

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

  const handleLogout = () => {
    const loggedOut = authService.logout();

    if (loggedOut) {
      console.log("issue logging out?");
      return;
    }

    setUser(null);
  };
  return (
    <div className="App">
      <NavBar user={user} handleLogout={handleLogout} />
      {user ? <Dashboard /> : <LoginForm handleLogin={handleLogin} />}
    </div>
  );
}

export default App;
