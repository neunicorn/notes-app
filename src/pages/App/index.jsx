import React from "react";
import { Body, Header } from "../../components";
import { getInitialData, showFormattedDate } from "../../utils";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      searchResult: [],
      search: "",
    };
    this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
    this.onArchiveEventHandler = this.onArchiveEventHandler.bind(this);
    this.filterNotes = this.filterNotes.bind(this);
    this.addNotes = this.addNotes.bind(this);
  }

  onDeleteEventHandler(id) {
    const newNotes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes: newNotes });
  }

  onArchiveEventHandler(id) {
    const newNotes = this.state.notes.map((note) => {
      if (note.id === id) {
        note.archived = !note.archived;
      }
      return note;
    });
    this.setState({ notes: newNotes });
  }
  addNotes({ title, body }) {
    this.setState((prevSate) => {
      return {
        notes: [
          ...prevSate.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: +new Date(),
            archived: false,
          },
        ],
      };
    });
  }
  filterNotes(search) {
    const newNotes = this.state.notes.filter((note) => {
      return note.title.toLowerCase().includes(search.toLowerCase());
    });
    this.setState({ searchResult: newNotes, search });
  }

  render() {
    return (
      <>
        <Header title="Notes App" filterNotes={this.filterNotes} />
        {console.log(this.state.notes)}
        <Body
          notes={
            this.state.search.length > 0
              ? this.state.searchResult
              : this.state.notes
          }
          addNotes={this.addNotes}
          deleteEventHandler={this.onDeleteEventHandler}
          archiveEventHandler={this.onArchiveEventHandler}
        />
      </>
    );
  }
}
export default App;
