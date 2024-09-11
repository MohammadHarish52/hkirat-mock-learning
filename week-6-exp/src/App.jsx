import PropTypes from "prop-types"; // Make sure to capitalize 'PropTypes'
import "./App.css";
const App = () => {
  return (
    <div>
      <CardWrapper>
        <TextComponent />
      </CardWrapper>
      <CardWrapper>
        {" "}
        <TextComponent2 />
      </CardWrapper>
    </div>
  );
};

const TextComponent = () => {
  return <div>hey</div>;
};
const TextComponent2 = () => {
  return <div>hey4</div>;
};

// Fixed the component name and propTypes validation
const CardWrapper = ({ children }) => {
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "40px",
      }}
    >
      {children}
    </div>
  );
};

// Use PropTypes.node to validate children
CardWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
