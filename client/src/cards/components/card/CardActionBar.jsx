import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import { func, string, arrayOf } from "prop-types";
import { useUser } from "../../../users/providers/UserProvider";
import { useState } from "react";
import CardDeleteDialog from "./CardDeleteDialog";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";
import useCards from "../../hooks/useCards";

const CardActionBar = ({ cardId, onDelete, onLike, cardUserId, cardLikes }) => {
  const [isDialogOpen, setDialog] = useState(false);
  const { user } = useUser();
  const navigate = useNavigate();
  const { handleLikeCard } = useCards();
  const [isLike, setLike] = useState(() => {
    if (!user) return false;
    return !!cardLikes.find(id => id === user._id);
  });

  const handleLike = async () => {
    setLike(prev => !prev);
    await handleLikeCard(cardId);
    onLike();
  };

  const handleDialog = term => {
    if (term === "open") return setDialog(true);
    setDialog(false);
  };

  const handleDeleteCard = () => {
    handleDialog();
    onDelete(cardId);
  };


  return (
    <>
      <CardActions
        disableSpacing
        sx={{ paddingTop: 0, justifyContent: "space-between" }}>
        <Box>
          {user && (user.isAdmin || user._id === cardUserId) && (
            <IconButton
              aria-label="delete card"
              onClick={() => handleDialog("open")}>
              <DeleteIcon />
            </IconButton>
          )}

          {user && user._id === cardUserId && (
            <IconButton
              aria-label="edit card"
              onClick={() => navigate(`${ROUTES.EDIT_CARD}/${cardId}`)}>
              <ModeEditIcon />
            </IconButton>
          )}
        </Box>

        <Box>
          <IconButton aria-label="call business">
            <CallIcon />
          </IconButton>

          {user && (
            <IconButton aria-label="add to favorites" onClick={handleLike}>
              <FavoriteIcon color={isLike ? "error" : "inherit"} />
            </IconButton>
          )}
        </Box>
      </CardActions>

      <CardDeleteDialog
        isDialogOpen={isDialogOpen}
        onChangeDialog={handleDialog}
        onDelete={handleDeleteCard}
      />
    </>
  );
};

CardActionBar.propTypes = {
  cardId: string.isRequired,
  onDelete: func.isRequired,
  onLike: func.isRequired,
  cardUserId: string.isRequired,
  cardLikes: arrayOf(string).isRequired,
};

export default CardActionBar;
