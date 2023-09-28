import { Link } from "react-router-dom";
import "./register.css";

const Register = () => {
  return (
    <div className="register">
      <div className="card-reg">
        <div className="left-reg">
          <h1>khalil social</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            commodi?
          </p>
          <span>do you have an account</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right-reg">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
