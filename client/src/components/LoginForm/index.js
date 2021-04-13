import { useState } from "react";
import { useHistory } from "react-router-dom";
const LoginForm = ({ handleLogin }) => {
  const [loginFormState, setLoginFormState] = useState({
    email: "",
    password: "",
  });

  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(history);
    handleLogin(loginFormState, history);
  };

  const handleChange = (e) => {
    setLoginFormState({
      ...loginFormState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={loginFormState.email}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={loginFormState.password}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
