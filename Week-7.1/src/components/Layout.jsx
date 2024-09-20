import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          background: "pink",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link>
      </div>
      {children}
    </div>
  );
};

export default Layout;
