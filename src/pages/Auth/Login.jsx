import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <h2 className="login__title">Login Your Mind</h2>
      <form className="login__form">
        <div className="form-group">
          <label className="login__label" for="email">
            Email address
          </label>
          <input
            type="email"
            className="form-control login__input"
            id="email"
            placeholder="example@gmail.com"
          />
        </div>
        <div className="form-group">
          <label className="login__label" for="password">
            Password
          </label>
          <input
            type="password"
            className="form-control login__input"
            placeholder="********"
          />
        </div>

        <button type="submit" data-title="Login" className="login__btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
