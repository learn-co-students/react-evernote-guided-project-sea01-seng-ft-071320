import React, { Fragment } from "react";

const NoteViewer = ({ title, body, toggleEdit }) => {
  return (
    <Fragment>
      <h2>{title}</h2>
      <p>{body}</p>
      <button onClick={toggleEdit}>Edit</button>
    </Fragment>
  );
};

export default NoteViewer;
