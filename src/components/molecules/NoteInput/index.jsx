import React from "react";
import { Input, TextArea, Button } from "../../atom";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      charLimit: 50,
      title: "",
      body: "",
    };

    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    this.onChangeBodyEventHandler = this.onChangeBodyEventHandler.bind(this);
    this.onChangeTitleEventHandler = this.onChangeTitleEventHandler.bind(this);
  }

  onChangeTitleEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
        charLimit: 50 - event.target.value.length,
      };
    });
  }

  onChangeBodyEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(e) {
    e.preventDefault();
    console.log(this.state.title, this.state.body);
    this.props.addNotes(this.state);
    this.setState({ title: "", body: "", charLimit: 50 });
  }

  render() {
    return (
      <div className="note-input">
        <h2>Buat Catatan</h2>
        <form onSubmit={this.onSubmitEventHandler}>
          <p className="note-input__title__char-limit">
            Sisa karakter: {this.state.charLimit}
          </p>
          <Input
            className="note-input__title"
            placeholder="Masukan Judul..."
            value={this.state.title}
            onChange={this.onChangeTitleEventHandler}
            required
          />
          <TextArea
            className="note-input__body"
            placeholder="Masukan Isi Catatan..."
            value={this.state.body}
            onChange={this.onChangeBodyEventHandler}
            required
          />
          <Button title="Buat" type="submit" />
        </form>
      </div>
    );
  }
}

export default NoteInput;
