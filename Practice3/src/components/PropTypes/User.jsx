import React from "react";
import PropTypes from "prop-types"; //it works with version:  "react": "^18.2.0", "react-dom": "^18.2.0" change it on dependencies and npm install

function User(props) {
  return (
    <div>
      <h1>{props.user.name}</h1>
      <h1>{props.user.id}</h1>
    </div>
  );
}

// Define PropTypes
User.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
};

// Default Props for the component
User.defaultProps = {
    user: { id: 0, name: "Default Name" }, 
  };

export default User;



