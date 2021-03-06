import React, { Component } from "react";
import PropTypes from "prop-types";
import emoji from "emoji-dictionary";
import "./NewCardForm.css";

const EMOJI_LIST = [
  "",
  "heart_eyes",
  "beer",
  "clap",
  "sparkling_heart",
  "heart_eyes_cat",
  "dog"
];

class NewCardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      emoji: ""
    };
  }

  resetState = () => {
    this.setState({
      text: "",
      emoji: ""
    });
  };

  onFormChange = event => {
    const field = event.target.name;
    const value = event.target.value;

    const updatedState = {};
    updatedState[field] = value;
    this.setState(updatedState);
  };

  // emojiDropdownOptions = () => {
  //const emoji = require("emoji-dictionary");
  // Map through text
  // Creat options
  // Translate via unicode

  // const emojiNames = emoji.names;
  // return emojiNames.map(emojiName => {
  //   return <option value={emojiName}>{emoji.getUnicode(emojiName)}</option>;
  // });
  // const emojiIcons = emoji.unicode;
  // return emojiIcons.map(emojiIcon => {
  //   return <option>{emojiIcon}</option>;
  // });
  // };

  emojiDropdownOptions = () => {
    const emojis = [""].concat(emoji.names);
    return emojis.map((emojiname, i) => {
      return (
        <option value={emojiname} key={i}>
          {" "}
          {emoji.getUnicode(emojiname)}{" "}
        </option>
      );
    });
  };

  onSubmit = event => {
    event.preventDefault();
    const { text, emoji } = this.state;

    if (text === " ") {
      return;
    }
    this.props.addCardCallback(this.state);
    this.resetState();
  };
  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        name="new-card-form"
        id="new-card-form"
        className="new-card-form"
      >
        <div>
          <textarea
            name="text"
            placeholder="text"
            onChange={this.onFormChange}
            value={this.state.text}
          />
        </div>
        <div>
          <label className="new-card-form--label" htmlFor="Emoji">
            Emoji
          </label>
          <select
            name="emoji"
            placeholder="emoji"
            value={this.state.emoji}
            onChange={this.onFormChange}
          >
            {this.emojiDropdownOptions()}
          </select>
        </div>
        <input
          className="btn btn-success new-card-form--submit"
          type="submit"
          name="submit"
          value="Add a Card"
        />
      </form>
    );
  }
}

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired
};

export default NewCardForm;
