import React from "react";

const NoteItem = ({ note, selectNote }) => (
  <li onClick={() => selectNote(note)}>
    <h2>{note.title}</h2>
    <p className="truncate">{note.body}</p>
  </li>
);

export default NoteItem;
