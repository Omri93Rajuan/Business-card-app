import { Paper, BottomNavigation, BottomNavigationAction } from "@mui/material";
import React from "react";
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import Twitter from "@mui/icons-material/Twitter";

// const MuiBottomNavigation = () => {
//   return (
//     <div>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
//         tenetur quidem pariatur at. Maxime corporis voluptate aliquam adipisci,
//         nam veritatis, placeat iusto eius quis excepturi harum dolore magnam
//         obcaecati expedita corrupti molestiae nisi fuga non minus quia? Quia
//         laboriosam eveniet excepturi mollitia, provident ducimus odit quam
//         repellat qui, necessitatibus, maiores adipisci possimus atque quis hic
//         suscipit voluptas dolorem culpa. Doloribus quasi sit inventore officia
//         veniam a ducimus commodi in! Dolorem illo maxime, dolore eos quae
//         blanditiis aliquid quibusdam fugit non eius iste vitae tenetur dolor
//         tempore temporibus similique quia? Nulla perferendis voluptate tempore
//         blanditiis eligendi ipsam dolores quae quod voluptates!
//       </p>
//       <Paper sx={{ position: "sticky" }} elevation={4}>
//         <BottomNavigation>
//           <BottomNavigationAction label="Facebook" icon={<Facebook />} />
//           <BottomNavigationAction label="Instagram" icon={<Instagram />} />
//           <BottomNavigationAction label="Twitter" icon={<Twitter />} />
//         </BottomNavigation>
//       </Paper>
//     </div>
//   );
// };

const MuiBottomNavigation = () => {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        tenetur quidem pariatur at. Maxime corporis voluptate aliquam adipisci,
        nam veritatis, placeat iusto eius quis excepturi harum dolore magnam
        obcaecati expedita corrupti molestiae nisi fuga non minus quia? Quia
        laboriosam eveniet excepturi mollitia, provident ducimus odit quam
        repellat qui, necessitatibus, maiores adipisci possimus atque quis hic
        suscipit voluptas dolorem culpa. Doloribus quasi sit inventore officia
        veniam a ducimus commodi in! Dolorem illo maxime, dolore eos quae
        blanditiis aliquid quibusdam fugit non eius iste vitae tenetur dolor
        tempore temporibus similique quia? Nulla perferendis voluptate tempore
        blanditiis eligendi ipsam dolores quae quod voluptates!
      </p>
      <Paper sx={{ position: "sticky" }} elevation={4}>
        <BottomNavigation showLabels>
          <BottomNavigationAction label="Facebook" icon={<Facebook />} />
          <BottomNavigationAction label="Instagram" icon={<Instagram />} />
          <BottomNavigationAction label="Twitter" icon={<Twitter />} />
        </BottomNavigation>
      </Paper>
    </div>
  );
};

export default MuiBottomNavigation;
