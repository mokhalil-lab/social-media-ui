import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>hello world</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            commodi?
          </p>
          <span>don't you have an account</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
