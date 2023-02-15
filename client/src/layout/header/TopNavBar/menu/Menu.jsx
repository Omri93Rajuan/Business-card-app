import MuiMenu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import ROUTES from "../../../../routes/routesModel";
import { useUser } from "../../../../users/providers/UserProvider";
import useUsers from "../../../../users/hooks/useUsers";
import MenuLink from "../../../../routes/components/MenuLink";

const Menu = ({ isOpen, anchorEl, onClose }) => {
  const { user } = useUser();
  const { handleLogout } = useUsers();

  const onLogout = () => {
    handleLogout();
    onClose();
  };

  return (
    <MuiMenu
      open={isOpen}
      onClose={onClose}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <Box>
        <MenuLink
          text="about"
          navigateTo={ROUTES.ABOUT}
          onClick={onClose}
          styles={{ display: { xs: "block", md: "none" } }}
        />

        {!user && (
          <>
            <MenuLink
              text="login"
              navigateTo={ROUTES.LOGIN}
              onClick={onClose}
              styles={{ display: { xs: "block", md: "none" } }}
            />
            <MenuLink
              text="signup"
              navigateTo={ROUTES.SIGNUP}
              onClick={onClose}
              styles={{ display: { xs: "block", md: "none" } }}
            />
          </>
        )}
        {user && (
          <>
            <MenuLink
              text="profile"
              navigateTo={ROUTES.USER_PROFILE}
              onClick={onClose}
            />
            <MenuLink
              text="edit account"
              navigateTo={ROUTES.EDIT_USER}
              onClick={onClose}
            />
            <MenuLink
              text="Fav card"
              navigateTo={ROUTES.FAV_CARDS}
              onClick={onClose}
            />
            <MenuItem onClick={onLogout}>Logout</MenuItem>
          </>
        )}
        {user && user.isBusiness && (
          <MenuLink
            text="My cards"
            navigateTo={ROUTES.MY_CARDS}
            onClick={onClose}
          />
        )}
        {user && user.isAdmin && (
          <>
            <MenuLink text="CRM" navigateTo={ROUTES.CRM} onClick={onClose} />
            <MenuLink
              text="SandBox"
              navigateTo={ROUTES.SANDBOX}
              onClick={onClose}
            />
          </>
        )}
      </Box>
    </MuiMenu>
  );
};

export default Menu;
