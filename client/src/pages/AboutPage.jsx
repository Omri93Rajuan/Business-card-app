import React from "react";
import Container from "@mui/material/Container";
import PageHeader from "../components/PageHeader";
import Grid from "@mui/material/Grid";

const AboutPage = () => {
  return (
    <Container>
      <PageHeader
        title="About Page"
        subtitle="On this page you can find explanations about using the application"
      />

      <Grid container spacing={2}>
        <Grid item xs={12} md={8} alignSelf="center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ea quasi
          magnam rem velit cumque facilis minus iste, similique at placeat
          adipisci reiciendis! Quibusdam pariatur voluptatibus suscipit,
          laboriosam earum sint asperiores, est velit voluptatem aspernatur
          quisquam modi quas, eligendi ad hic! Laborum deserunt quis, atque
          quam, sapiente maxime repellat voluptatem deleniti obcaecati aperiam
          ipsum! Iure, saepe! Voluptatibus harum, animi sapiente quas dolore,
          cum nam adipisci officiis inventore aperiam omnis aut fuga nemo
          perferendis tenetur? Debitis nihil facere quos? Debitis molestias quae
          voluptatum. Eius perferendis necessitatibus sed consequatur possimus
          ipsam odio, eos ab, enim corporis explicabo aspernatur consequuntur
          saepe quo facilis et voluptatem qui, ut quae! Reiciendis similique
          exercitationem ipsa. Aliquam quam eum ad, non delectus ducimus soluta
          numquam, molestiae fugiat sit odit! Repudiandae quaerat deserunt totam
          praesentium eaque voluptatem pariatur neque porro, accusantium
          consequuntur, exercitationem quisquam? Itaque praesentium beatae
          consectetur, quisquam facilis qui laboriosam voluptate maxime
          cupiditate voluptas et nisi?
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
    </Container>
  );
};

export default AboutPage;
