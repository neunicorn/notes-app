import React from "react";
import Button from "../Button";

const NoteItem = ({
  title,
  date,
  body,
  deleteEventHandler,
  archiveEventHandler,
  status,
}) => {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{date}</p>
        <p className="note-item__body">{body}</p>
      </div>
      <div className="note-item__action">
        <Button
          title="Delete"
          className="note-item__delete-button"
          onClick={deleteEventHandler}
        />
        {status} === true ?
        <Button
          title="Unarchive"
          className="note-item__archive-button"
          onClick={archiveEventHandler}
        />{" "}
        :
        <Button
          title="Archive"
          className="note-item__archive-button"
          onClick={archiveEventHandler}
        />
        ;
      </div>
    </div>
  );
};

export default NoteItem;