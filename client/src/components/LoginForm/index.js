const LoginForm = () => {
  return (
    <div>
      <h2>Login</h2>

      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>

      <button>Login</button>
    </div>
  );
};

export default LoginForm;
