import React from "react";

export default function Error({ photo }) {
  return (
    <div className="alert alert-success" role="alert">
      <h4 className="alert-heading">Error 404 </h4>
      <p>No Photos under {photo} category!!!</p>
      <p>Please search for a valid keyword. </p>
    </div>
  );
}
