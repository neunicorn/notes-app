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
      <NoteItem
        key="7"
        id="7"
        title="title"
        createdAt="2020-12-12"
        body="body"
        deleteEventHandler={() => deleteEventHandler(7)}
        archiveEventHandler={() => archiveEventHandler(7)}
        status={true}
      />
      {/* {notes.map((note))=>{
        <NoteItem
        key={note.id}
        id={note.id}
        
      }} */}
      {/* {notes.map((note) => {
        if (note.archived === status) {
          return (
            <NoteItem
              key={note.id}
              title={note.title}
              createdAt={note.createdAt}
              body={note.body}
              deleteEventHandler={() => deleteEventHandler(note.id)}
              archiveEventHandler={() => archiveEventHandler(note.id)}
              status={note.archived}
            />
          );
        }
      })} */}
    </div>
  );
};

export default NoteList;
