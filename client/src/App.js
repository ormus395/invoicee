import { useEffect, useState, useReducer } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// actions
import * as actions from "./actions";

// reducers
import uiReducer from "./reducers/uiReducer";

// service imports
import authService from "./services/auth";
import userService from "./services/user";

// component and view imports
import NavBar from "./components/NavBar";
import Backdrop from "./components/Backdrop";
import Drawer from "./components/Drawer/Drawer";
import Invoice from "./views/Invoice";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Landing from "./views/Landing";
import Dashboard from "./views/Dashboard";
import InvoiceForm from "./components/InvoiceForm/InvoiceForm";
import Button from "./components/Button";

function App() {
  const [error, setError] = useState(false);
  const [user, setUser] = useState(null);
  const [uiState, uiDispatch] = useReducer(uiReducer, { drawer: true });
  // on app load, determine if the user is logged in or not
  // store the JWT in local storage (this inst the safest option)
  useEffect(() => {
    const loggedUser = authService.getUser();
    console.log(loggedUser);

    if (loggedUser) {
      setUser(JSON.parse(loggedUser));
    }
  }, []);

  const handleLogin = async ({ email, password }, history) => {
    try {
      const loggedUser = await authService.login({ email, password });
      console.log(loggedUser);
      localStorage.setItem("user", JSON.stringify(loggedUser));

      setUser(loggedUser);

      // this is probably a huge nono
      // I decided to use the useHistory method in the login form
      // component and pass it to this higher level function
      // useHistory doesnt work due to context not existing
      // in the component the BrowserRouter is defined
      // however the login form is a child to the BrowserRouter
      // which means i get access to the context in that component
      // but I need access to history here, to redirect on a succesful login
      // theres probably a better way to go about this
      history.push("/dashboard");
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
        {uiState.drawer ? (
          <Backdrop>
            <Drawer>
              <InvoiceForm />
              <div className="drawer__footer">
                <Button
                  onClick={() => {
                    console.log("button clicked");
                    try {
                      uiDispatch({ type: actions.CLOSE_DRAWER });
                    } catch (err) {
                      console.log(err);
                    }
                  }}
                >
                  Cancel
                </Button>
              </div>
            </Drawer>
          </Backdrop>
        ) : null}
        <Switch>
          <PrivateRoute path="/profile">
            <h1>Profile</h1>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/:id">
            <Invoice />
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
