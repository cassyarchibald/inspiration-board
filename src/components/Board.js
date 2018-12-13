import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import "./Board.css";
import Card from "./Card";
import NewCardForm from "./NewCardForm";
import CARD_DATA from "../data/card-data.json";
const emoji = require("emoji-dictionary");

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: []
    };
  }

  cardCollection = () => {
    return CARD_DATA["cards"].map(card => {
      return <Card text={card.text} id={card.id} emoji={card.emoji} />;
    });
  };

  render() {
    return <div>{this.cardCollection()}</div>;
  }
}

Board.propTypes = {};

export default Board;
