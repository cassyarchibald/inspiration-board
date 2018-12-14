import React, { Component } from "react";
import PropTypes from "prop-types";
import emoji from "emoji-dictionary";

import "./Card.css";

class Card extends Component {
  // showProps = () => {
  //   console.log(this.props.id);
  // };
  render() {
    return (
      <section className="card">
        <div className="card__content">
          <section>
            <p className="card__content-text">{this.props.text}</p>
          </section>

          <section>
            {this.props.emoji && (
              <p className="card__content-emoji">
                {emoji.getUnicode(this.props.emoji)
                  ? emoji.getUnicode(this.props.emoji)
                  : this.props.emoji}
              </p>
            )}
          </section>
          <button
            className="card__delete"
            onClick={() => this.props.removeCardCallback(this.props.id)}
            type="button"
          >
            Delete
          </button>
        </div>
      </section>
    );
  }
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  removeCardCallback: PropTypes.func.isRequired,
  emoji: PropTypes.string
};

export default Card;
