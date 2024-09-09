import React, { useState } from "react";
import PropTypes from "prop-types";

function App() {
  const [title, setTitle] = useState("my name is harkirat");

  function updateTitle() {
    setTitle("my name is " + Math.random());
  }

  return (
    <div>
      <button onClick={updateTitle}>Update the title</button>
      <Header title={title} />
      <Header title="harkirat2" />
      <Header title="harkirat2" />
      <Header title="harkirat2" />
      <Header title="harkirat2" />
      <Header title="harkirat2" />
      <Header title="harkirat2" />
    </div>
  );
}

const Header = React.memo(function Header({ title }) {
  return <div>{title}</div>;
});

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default App;
