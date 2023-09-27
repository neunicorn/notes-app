import React from "react";
import { Body, Header } from "../../components";
import { getInitialData, showFormattedDate } from "../../utils";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
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
    this.setState((state) => {
      const newNotes = state.notes.map((note) => {
        if (note.id === id) {
          note.archived = !note.archived;
          return note;
        }
      });
      return { notes: newNotes };
    });
  }
  addNotes({ title, body }) {
    const newNotes = [
      ...this.state.notes,
      {
        id: this.state.notes.length + 1,
        title,
        body,
        date: +new Date(),
        archived: false,
      },
    ];
    this.setState({ notes: newNotes });
  }
  filterNotes(search) {
    for (const note of this.state.notes) {
      if (note.title.toLowerCase().includes(search.toLowerCase())) {
        return this.setState(() => {
          return {
            notes: note,
          };
        });
      }
    }
    // this.setState({ notes: newNotes });
  }
  render() {
    return (
      <>
        <Header title="Notes App" filterNotes={this.filterNotes} />
        {console.log(this.state.notes)}
        <Body
          notes={this.state.notes}
          addNotes={this.addNotes}
          deleteEventHandler={this.onDeleteEventHandler}
          archiveEventHandler={this.onArchiveEventHandler}
        />
      </>
    );
  }
}
export default App;
