import React, { Component } from "react";
import NoteEditor from "./NoteEditor";
import NoteViewer from "./NoteViewer";
import Instructions from "./Instructions";

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and renderContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
class Content extends Component {
  state = {
    note: this.props.note,
    edit: false,
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  handleChange = (event) => {
    this.setState({
      note: {
        [event.target.name]: event.target.value,
      },
    });
  };

  toggleEdit = () => {
    this.setState((state) => ({ edit: !state.edit }));
  };

  renderContent = () => {
    if (!!this.state.note && !!this.state.edit) {
      return (
        <NoteEditor
          note={this.state.note}
          toggleEdit={this.toggleEdit}
          handleChange={this.handleChange}
        />
      );
    } else if (!!this.state.note) {
      return <NoteViewer {...this.props.note} toggleEdit={this.toggleEdit} />;
    } else {
      return <Instructions />;
    }
  };

  render() {
    return (
      <div className="master-detail-element detail">{this.renderContent()}</div>
    );
  }
}

export default Content;
