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
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      {children}
    </div>
  );
};

export default Layout;
