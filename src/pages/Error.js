import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section>
      <div className="error-container">
        <h2>Oops! It's a dead end</h2>
        <Link to="/" className="btn">
          <button>back home</button>
        </Link>
      </div>
    </section>
  );
};

export default Error;
