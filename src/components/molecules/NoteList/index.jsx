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
      {notes.map((note) =>
        note.archived === status ? (
          <NoteItem
            key={note.id}
            id={note.id}
            onDelete={deleteEventHandler}
            onArchive={archiveEventHandler}
            status={status}
            {...note}
          />
        ) : null
      )}
    </div>
  );
};

export default NoteList;
