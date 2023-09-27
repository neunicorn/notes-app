import React from "react";
import { Input } from "../../index";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
    };

    this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
    this.filterNotes = this.filterNotes.bind(this);
  }

  onSearchEventHandler(event) {
    this.setState(() => {
      return {
        search: event.target.value,
      };
    });
  }

  filterNotes(event) {
    event.preventDefault();
    this.props.filterNotes(this.state.search);
  }

  render() {
    return (
      <div className="note-app__header">
        <h1>{this.props.title}</h1>
        <div className="note-search">
          <Input
            placeholder="Search..."
            type="text"
            onChange={this.onSearchEventHandler}
            onKeyUp={this.filterNotes}
            onKeyDown={this.filterNotes}
            value={this.state.search}
          />
        </div>
      </div>
    );
  }
}

export default Header;
