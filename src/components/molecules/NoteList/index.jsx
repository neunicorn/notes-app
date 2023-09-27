import React from "react";
import { NoteItem } from "../../atom";

const NoteList = ({
  notes,
  deleteEventHandler,
  archiveEventHandler,
  status,
}) => {
  return (
    <div className="notes-list">
      {notes.map((note) => {
        {
          console.log(note);
        }
        if (note.archived === false) {
          {
            console.log("masuk");
          }
          <NoteItem
            key={note.id}
            deleteEventHandler={deleteEventHandler}
            archiveEventHandler={archiveEventHandler}
            title={note.title}
            date={note.date}
            body={note.body}
            status="false"
          />;
          {
          }
        }
      })}
    </div>
  );
};

export default NoteList;
