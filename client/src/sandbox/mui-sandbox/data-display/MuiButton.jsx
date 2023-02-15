import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

// const MuiButton = () => {
//   return (
//     <Box display="flex" justifyContent="space-between" m={2}>
//       <Button variant="text" color="primary">
//         text
//       </Button>
//       <Button variant="contained" color="primary">
//         contained
//       </Button>
//       <Button variant="outlined" color="primary">
//         outlined
//       </Button>
//       <Button variant="outlined" disabled color="primary">
//         disabled
//       </Button>
//     </Box>
//   );
// };

// const MuiButton = () => {
//   return (
//     <Box m={2}>
//       <Button variant="contained" color="primary">
//         primary
//       </Button>
//       <Button variant="contained" color="secondary">
//         secondary
//       </Button>
//       <Button variant="contained" color="success">
//         success
//       </Button>
//       <Button variant="contained" color="error">
//         error
//       </Button>
//       <Button variant="contained" color="info">
//         info
//       </Button>
//       <Button variant="contained" color="warning">
//         outlined
//       </Button>
//     </Box>
//   );
// };

// const MuiButton = () => {
//   return (
//     <Box m={2}>
//       <Button variant="contained" color="primary" size="small">
//         primary
//       </Button>
//       <Button variant="contained" color="secondary" size="medium">
//         secondary
//       </Button>
//       <Button variant="contained" color="success" size="large">
//         success
//       </Button>
//     </Box>
//   );
// };

// const MuiButton = () => {
//   return (
//     <Box m={2}>
//       <Button
//         variant="contained"
//         color="primary"
//         startIcon={<DeleteForeverIcon />}
//       >
//         primary
//       </Button>
//       <Button
//         variant="contained"
//         color="secondary"
//         endIcon={<RamenDiningIcon />}
//       >
//         secondary
//       </Button>
//       <Button variant="contained" color="success" fullWidth>
//         success
//       </Button>
//     </Box>
//   );
// };

const MuiButton = () => {
  return (
    <Box m={2}>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

export default MuiButton;
