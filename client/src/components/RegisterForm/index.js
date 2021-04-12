import { useState } from "react";

const RegisterForm = ({ handleRegister }) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(formState);
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          onChange={(e) => handleChange(e)}
          id="name"
          name="name"
          type="text"
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <button>Register</button>
    </form>
  );
};

export default RegisterForm;
