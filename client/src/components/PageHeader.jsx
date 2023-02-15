import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import { string } from "prop-types";

const PageHeader = ({ title, subtitle }) => {
  return (
    <Box pt={2}>
      <Typography variant="h2" component="h1">
        {title}
      </Typography>
      <Typography variant="h5" component="h2">
        {subtitle}
      </Typography>
      <Divider sx={{ my: 2 }} />
    </Box>
  );
};

PageHeader.propTypes = {
  title: string.isRequired,
  subtitle: string.isRequired,
};
export default PageHeader;
