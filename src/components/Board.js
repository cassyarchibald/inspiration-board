import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import "./Board.css";
import Card from "./Card";
import NewCardForm from "./NewCardForm";
import CARD_DATA from "../data/card-data.json";
const emoji = require("emoji-dictionary");
const URL = "https://inspiration-board.herokuapp.com/boards/Cassy/cards";

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: []
    };
  }
  addCard = newCard => {
    const apiPayload = {
      ...newCard
    };
    axios.post(URL, apiPayload).then(response => {
      console.log(response);
      const myNewCard = response.data;
      const { cards } = this.state;
      cards.push(newCard);
      this.setState({
        cards
      });
    });
  };

  componentDidMount() {
    axios
      .get(`${this.props.url}${this.props.boardName}` + "/cards")
      .then(response => {
        const cards = response.data.map(cardObject => {
          const newCard = {
            ...cardObject.card
          };
          return newCard;
        });
        this.setState({
          cards: cards
        });
      })
      .catch(error => {
        console.log(error.message);
        this.setState({
          errorMessage: error.message
        });
      });
  }

  cardCollection = () => {
    return this.state.cards.map(card => {
      return (
        <Card text={card.text} id={card.id} key={card.id} emoji={card.emoji} />
      );
    });
  };

  render() {
    return (
      <div>
        {this.cardCollection()}
        <NewCardForm addCardCallback={this.addCard} />
      </div>
    );
  }
}

Board.propTypes = {
  boardName: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Board;
