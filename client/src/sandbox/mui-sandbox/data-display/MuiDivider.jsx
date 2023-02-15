import React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Box, Chip } from "@mui/material";

const MuiDivider = () => {
  return (
    <>
      <Typography variant="body1" color="initial">
        item one
      </Typography>
      <Divider />
      <Typography variant="body1" color="initial">
        item two
      </Typography>
      <Divider light />
      <Typography variant="body1" color="initial">
        item three
      </Typography>
    </>
  );
};

// const MuiDivider = () => {
//   return (
//     <Box display="flex">
//       <Typography p={1} variant="body1" color="initial">
//         item one
//       </Typography>
//       <Divider orientation="vertical" flexItem />
//       <Typography p={1} variant="body1" color="initial">
//         item two
//       </Typography>
//     </Box>
//   );
// };

// const MuiDivider = () => {
//   return (
//     <Box>
//       <Typography p={1} variant="body1" color="initial">
//         item one
//       </Typography>
//       <Divider>CENTER</Divider>
//       <Typography p={1} variant="body1" color="initial">
//         item two
//       </Typography>
//       <Divider textAlign="left">LEFT</Divider>
//       <Typography p={1} variant="body1" color="initial">
//         item two
//       </Typography>
//       <Divider textAlign="right">RIGHT</Divider>
//       <Typography p={1} variant="body1" color="initial">
//         item two
//       </Typography>
//       <Divider>
//         <Chip label="miro" />
//       </Divider>
//       <Typography p={1} variant="body1" color="initial">
//         item two
//       </Typography>
//     </Box>
//   );
// };

export default MuiDivider;
