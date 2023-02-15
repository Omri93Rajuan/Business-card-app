import React from "react";
import { arrayOf, bool, string, func } from "prop-types";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import { Typography } from "@mui/material";
import Cards from "./Cards";
import cardType from "../models/types/cardType";

const CardsFeedback = ({ isLoading, error, cards, onDelete, onLike }) => {
  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;

  if (cards && !cards.length)
    return (
      <Typography>
        Oops... it seems there are no business cards to display
      </Typography>
    );

  if (cards && !!cards.length)
    return <Cards cards={cards} onDelete={onDelete} onLike={onLike} />;
};

CardsFeedback.propTypes = {
  isLoading: bool.isRequired,
  error: string,
  cards: arrayOf(cardType),
  onDelete: func.isRequired,
  onLike: func.isRequired,
};

CardsFeedback.defaultProps = {
  onLike: () => {},
};

export default CardsFeedback;
