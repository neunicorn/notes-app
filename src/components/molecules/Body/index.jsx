import React from "react";
import { NoteInput, NoteList } from "../..";

function NotesAktif(notes, deleteEventHandler, archiveEventHandler) {
  const isNotes = notes.some((note) => {
    return note.archived === false;
  });
  if (isNotes) {
    return (
      <NoteList
        notes={notes}
        status="false"
        deleteEventHandler={deleteEventHandler}
        archiveEventHandler={archiveEventHandler}
      />
    );
  } else {
    return <p className="note-list__empty-message">Tidak ada catatan</p>;
  }
}

function NotesArchive(notes, deleteEventHandler, archiveEventHandler) {
  const isNotes = notes.some((note) => {
    return note.archived === true;
  });
  if (isNotes) {
    return (
      <NoteList
        notes={notes}
        status="true"
        deleteEventHandler={deleteEventHandler}
        archiveEventHandler={archiveEventHandler}
      />
    );
  } else {
    return <p className="note-list__empty-message">Tidak ada catatan</p>;
  }
}

const Body = ({ notes, addNotes, deleteEventHandler, archiveEventHandler }) => {
  const isNotes = notes.some((note) => {
    return note.archived === false;
  });

  const isArchived = notes.some((note) => {
    return note.archived === true;
  });

  return (
    <div className="note-app__body">
      <NoteInput addNotes={addNotes} />
      {console.log(notes)}
      <NoteList
        notes={notes}
        status="false"
        deleteEventHandler={deleteEventHandler}
        archiveEventHandler={archiveEventHandler}
      />
      {/* {isNotes === true ? (
        <NoteList
          notes={notes}
          status="false"
          deleteEventHandler={deleteEventHandler}
          archiveEventHandler={archiveEventHandler}
        />
      ) : (
        <p className="note-list__empty-message">Tidak ada catatan</p>
      )} */}
      {isArchived === true ? (
        <NoteList
          notes={notes}
          status="true"
          deleteEventHandler={deleteEventHandler}
          archiveEventHandler={archiveEventHandler}
        />
      ) : (
        <p className="note-list__empty-message">Tidak ada catatan ???????</p>
      )}
    </div>
  );
};
export default Body;
