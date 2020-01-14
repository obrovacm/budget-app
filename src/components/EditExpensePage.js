import React from "react";

const EditExpensePage = props => {
  console.log(props);

  return (
    <div>
      <h3>Edit Page with id: {props.match.params.id}</h3>
      <p>
        Router gives additional info in props object, such as this ID, from URL.
      </p>
    </div>
  );
};

export default EditExpensePage;
