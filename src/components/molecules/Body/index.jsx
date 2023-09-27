import React from "react";
import { NoteInput, NoteList } from "../..";

const Body = ({ notes, addNotes, deleteEventHandler, archiveEventHandler }) => {
  console.log("=======================================");
  console.log(notes);
  const isNotes = notes.some((note) => {
    return note.archived === false;
  });

  const isArchived = notes.some((note) => {
    return note.archived === true;
  });

  return (
    <div className="note-app__body">
      <NoteInput addNotes={addNotes} />
      <h2>Catatan Aktif</h2>
      {isNotes === true ? (
        <NoteList
          notes={notes}
          status={false}
          deleteEventHandler={deleteEventHandler}
          archiveEventHandler={archiveEventHandler}
        />
      ) : (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      )}
      <h2>Arsip</h2>
      {isArchived === true ? (
        <NoteList
          notes={notes}
          status={true}
          deleteEventHandler={deleteEventHandler}
          archiveEventHandler={archiveEventHandler}
        />
      ) : (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      )}
    </div>
  );
};
export default Body;
