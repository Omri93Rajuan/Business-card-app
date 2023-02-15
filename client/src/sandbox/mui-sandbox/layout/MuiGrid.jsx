import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

/********* basic Grid **********/
// const MuiGrid = () => {
//   return (
//     <Grid container spacing={1}>
//       <Grid item xs={3}>
//         <Box sx={{ p: 2, backgroundColor: "success.light" }}>One</Box>
//       </Grid>
//       <Grid item xs={6}>
//         <Box sx={{ p: 2, backgroundColor: "primary.light" }}>Two</Box>
//       </Grid>
//       <Grid item xs={3}>
//         <Box sx={{ p: 2, backgroundColor: "error.light" }}>Three</Box>
//       </Grid>
//     </Grid>
//   );
// };

/********* Grid Responsive **********/
const MuiGrid = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box sx={{ p: 2, backgroundColor: "success.light" }}>One</Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box sx={{ p: 2, backgroundColor: "primary.light" }}>Two</Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box sx={{ p: 2, backgroundColor: "error.light" }}>Three</Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box sx={{ p: 2, backgroundColor: "secondary.light" }}>Four</Box>
      </Grid>
    </Grid>
  );
};

/********* Grid spacing **********/
// const MuiGrid = () => {
//   return (
//     <Grid container rowSpacing={4} columnSpacing={1}>
//       <Grid item xs={12} sm={6} md={4} lg={3}>
//         <Box sx={{ p: 2, backgroundColor: "success.light" }}>One</Box>
//       </Grid>
//       <Grid item xs={12} sm={6} md={4} lg={3}>
//         <Box sx={{ p: 2, backgroundColor: "primary.light" }}>Two</Box>
//       </Grid>
//       <Grid item xs={12} sm={6} md={4} lg={3}>
//         <Box sx={{ p: 2, backgroundColor: "error.light" }}>Three</Box>
//       </Grid>
//       <Grid item xs={12} sm={6} md={4} lg={3}>
//         <Box sx={{ p: 2, backgroundColor: "secondary.light" }}>Four</Box>
//       </Grid>
//     </Grid>
//   );
// };

/********* Grid spacing **********/
// const MuiGrid = () => {
//   return (
//     <Grid container justifyContent="space-between">
//       {/* <Grid container justifyContent="center"> */}
//       <Grid item xs={12} sm={6} md={4} lg={3}>
//         <Box sx={{ p: 2, backgroundColor: "success.light" }}>One</Box>
//       </Grid>
//       <Grid item xs={12} sm={6} md={4} lg={3}>
//         <Box sx={{ p: 2, backgroundColor: "primary.light" }}>Two</Box>
//       </Grid>
//       <Grid item xs={12} sm={6} md={4} lg={3}>
//         <Box sx={{ p: 2, backgroundColor: "error.light" }}>Three</Box>
//       </Grid>
//     </Grid>
//   );
// };

/********* Grid spacing **********/
// const MuiGrid = () => {
//   return (
//     <Container maxWidth="lg">
//       <Grid
//         container
//         alignItems="center"
//         justifyContent="center"
//         height={200}
//         sx={{ backgroundColor: "warning.light" }}
//       >
//         <Grid item xs={3}>
//           <Box sx={{ p: 2, backgroundColor: "success.light" }}>One</Box>
//         </Grid>
//         <Grid item xs={3}>
//           <Box sx={{ p: 2, backgroundColor: "primary.light" }}>Two</Box>
//         </Grid>
//         <Grid item xs={3}>
//           <Box sx={{ p: 2, backgroundColor: "error.light" }}>Three</Box>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

export default MuiGrid;
