import React, { Component } from "react";

class NoteEditor extends Component {
  render() {
    return (
      <form className="note-editor">
        <input
          onChange={this.props.handleChange}
          type="text"
          name="title"
          value={this.props.note.title}
        />
        <textarea
          onChange={this.props.handleChange}
          name="body"
          value={this.props.note.body}
        />
        <div className="button-row">
          <input
            onClick={() => console.log(this.props.note)}
            className="button"
            type="submit"
            value="Save"
          />
          <button onClick={this.props.toggleEdit} type="button">
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
