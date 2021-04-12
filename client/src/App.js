import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";

// service imports
import authService from "./services/auth";
import userService from "./services/user";

// component and view imports
import NavBar from "./components/NavBar";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Landing from "./views/Landing";
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

      // this is probably not ok. should find react router way to redirect
      window.location = "/dashboard";
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

  const handleRegister = async (newUser) => {
    console.log("register user");

    try {
      const registeredUser = await userService.register(newUser);

      console.log(registeredUser);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Router>
      <div className="App">
        <NavBar user={user} handleLogout={handleLogout} />
        <Switch>
          <PrivateRoute path="/profile">
            <h1>Profile</h1>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard user={user} />
          </PrivateRoute>
          <Route path="/login">
            <LoginForm handleLogin={handleLogin} />
          </Route>
          <Route path="/register">
            <RegisterForm handleRegister={handleRegister} />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function PrivateRoute({ children, ...rest }) {
  let auth = authService.getUser();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
  );
}

export default App;
