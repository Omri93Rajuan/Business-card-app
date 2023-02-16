import React, { useEffect } from "react";
import useCards from "../hooks/useCards";
import { useUser } from "../../users/providers/UserProvider";
import { Navigate, useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import PageHeader from "../../components/PageHeader";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import CardsFeedback from "../components/CardsFeedback";

const MyCardsPage = () => {
  const { value, handleGetMyCards } = useCards();
  const { isLoading, error, cards } = value;
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    handleGetMyCards();
  }, [handleGetMyCards]);

  if (!user) return <Navigate replace to={ROUTES.CARDS} />;

  return (
    <Container sx={{ position: "relative", minHeight: "92vh" }}>
      <PageHeader
        title="My Cards Page"
        subtitle="Here you can find your business cards"
      />

      {cards && (
        <Fab
          onClick={() => navigate(ROUTES.CREATE_CARD)}
          color="primary"
          aria-label="add"
          sx={{
            position: "absolute",
            bottom: 75,
            right: 16,
          }}
        >
          <AddIcon />
        </Fab>
      )}
      <CardsFeedback
        isLoading={isLoading}
        error={error}
        cards={cards}
        onDelete={() => {}}
      />
    </Container>
  );
};

export default MyCardsPage;
