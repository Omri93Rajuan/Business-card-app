import React from "react";
import Container from "@mui/material/Container";
import PageHeader from "../components/PageHeader";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const AboutPage = () => {
  return (
    <Container>
      <PageHeader
        title="About Page"
        subtitle="On this page you can find explanations about using the application"
      />
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: { md: "flex", xs: "none" }, justifyContent: "center" }}
        >
          <img src="/assets/images/Regularcard.jpg" alt="card" width="100%" />
        </Grid>
        <Grid item xs={12} md={8} alignSelf="center" sx={{fontSize:"20px"}}>
          <Typography
            sx={{ textAlign: "center", backgroundColor: "#A69897" }}
            item
            variant="h2"
            color="initial"
          >
            Regular
          </Typography>
          After you register for free on the site and choose the option not to
          be our members and to be regular users, you will get the option to
          save tickets in your favorites and thus make it easier for you to use
          the site You will also have the option to upgrade at any time to a
          business user and get the option to create and edit cards
        </Grid>
      </Grid>
      <Grid container spacing={2}>
      <Grid item xs={12} md={8} alignSelf="center" sx={{fontSize:"20px"}}>
          <Typography
            sx={{ textAlign: "center", backgroundColor: "#D9A491" }}
            item
            variant="h2"
            color="initial"
          >
            Business
          </Typography>
          After you register for free on the website, you will get the
          opportunity to create your first card Creating a user card for a
          business or company Creating the card will allow you to get great
          exposure on the Internet and publish your contact information, edit it
          and also save it in your favorites Different people will have the
          option to like the page and thus increase its exposure in the eyes of
          other people.
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: { md: "flex", xs: "none" }, justifyContent: "center" }}
        >
          <img src="/assets/images/card.jpg" alt="card" width="100%" />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: { md: "flex", xs: "none" }, justifyContent: "center" }}
        >
          <img src="/assets/images/crmSystem.jpg" alt="card" width="100%" />
        </Grid>
        <Grid item xs={12} md={8} alignSelf="center" sx={{fontSize:"20px"}}>
          <Typography
            sx={{ textAlign: "center", backgroundColor: "#D9B855" }}
            item
            variant="h2"
            color="initial"
          >
            Admin
          </Typography>
          After you have registered as a business user, you can apply and become
          an administrator Once you become an admin, all parts of the site will
          be open to you without any restrictions You will still be able to
          create cards but now you will also get permission to delete different
          cards and even change user statuses You can access special areas to
          view CRM systems and many other interesting surprises Definitely
          highly recommended!
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutPage;
