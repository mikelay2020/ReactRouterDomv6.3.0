import { Link } from "react-router-dom";

const BeginPage = () => {
  return (
    <div>
      <h1>Begin work</h1>

      <Link
        to="/begin/signin"
        style={{ margin: "1rem 1rem", display: "inline-block" }}
      >
        Sign In
      </Link>
      <Link
        to="/begin/signup"
        style={{ margin: "1rem 1rem", display: "inline-block" }}
      >
        sign Up
      </Link>
    </div>
  );
};

export { BeginPage };
