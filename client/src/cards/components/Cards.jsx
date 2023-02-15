import React from "react";
import Card from "./card/Card";
import { Grid } from "@mui/material";
import { arrayOf, func } from "prop-types";
import cardType from "../models/types/cardType";

const Cards = ({ cards, onDelete, onLike }) => {
  return (
    <Grid container spacing={2} pb={2}>
      {cards.map((card) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={card._id}>
          <Card card={card} onDelete={onDelete} onLike={onLike} />
        </Grid>
      ))}
    </Grid>
  );
};

Cards.propTypes = {
  cards: arrayOf(cardType).isRequired,
  onDelete: func.isRequired,
  onLike: func.isRequired,
};

export default Cards;
