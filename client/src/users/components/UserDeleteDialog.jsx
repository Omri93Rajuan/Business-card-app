
// -------- בשלבי פיתוח --------
// import { bool, func } from "prop-types";
// import Button from "@mui/material/Button";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";

// const UserDeleteDialog = ({ isDialogOpen, onDelete, onChangeDialog }) => {
//   return (
//     <Dialog
//       open={isDialogOpen}
//       onClose={onChangeDialog}
//       aria-labelledby="alert-dialog-title"
//       aria-describedby="alert-dialog-description"
//       maxWidth="xs"
//     >
//       <DialogTitle id="alert-dialog-title">
//         {"Are you sure you want to delete this user?"}
//       </DialogTitle>
//       <DialogContent>
//         <DialogContentText id="alert-dialog-description">
//           This operation will completely delete the user and all its
//           data from the database and it will not be possible to retrieve the
//           user afterwards
//         </DialogContentText>
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={onChangeDialog} color="error">
//           cancel
//         </Button>
//         <Button onClick={() =>onDelete()} autoFocus color="info">
//           Delete card
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// UserDeleteDialog.propTypes = {
//   isDialogOpen: bool.isRequired,
//   onChangeDialog: func.isRequired,
//   onDelete: func.isRequired,
// };

// export default UserDeleteDialog;
