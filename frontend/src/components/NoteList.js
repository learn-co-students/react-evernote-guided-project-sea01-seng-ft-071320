import React from "react";
import NoteItem from "./NoteItem";

const NoteList = ({ notes, selectNote }) => {
  return (
    <ul>
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} selectNote={selectNote} />
      ))}
    </ul>
  );
};

export default NoteList;
