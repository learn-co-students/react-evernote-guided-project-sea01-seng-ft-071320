import React, { Component, Fragment } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

const ENDPOINT = "http://localhost:5500/api/v1";

class NoteContainer extends Component {
  state = {
    notes: [],
    note: false,
  };

  componentDidMount() {
    fetch(`${ENDPOINT}/notes`)
      .then((resp) => resp.json())
      .then((notes) =>
        this.setState({
          notes: notes,
        })
      );
  }

  selectNote = (note) => {
    this.setState({ note: note }, () => console.log(this.state.note));
  };

  render() {
    return (
      <Fragment>
        <Search />
        <div className="container">
          <Sidebar selectNote={this.selectNote} notes={this.state.notes} />
          <Content note={this.state.note} />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
