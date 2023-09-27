import React from "react";
import Button from "../Button";
import { showFormattedDate } from "../../../utils";

const NoteItem = ({
  title,
  createdAt,
  body,
  id,
  deleteEventHandler,
  archiveEventHandler,
  status,
}) => {
  {
    console.log(title, createdAt, body);
  }
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{showFormattedDate(createdAt)}</p>
        <p className="note-item__body">{body}</p>
      </div>
      <div className="note-item__action">
        <Button
          title="Delete"
          className="note-item__delete-button"
          onClick={() => deleteEventHandler(id)}
        />
        {status === true ? (
          <Button
            title="Unarchive"
            className="note-item__archive-button"
            onClick={() => archiveEventHandler(id)}
          />
        ) : (
          <Button
            title="Archive"
            className="note-item__archive-button"
            onClick={() => archiveEventHandler(id)}
          />
        )}
      </div>
    </div>
  );
};

export default NoteItem;
