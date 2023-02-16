import React, { useState, useEffect } from "react";
import useUsers from "../hooks/useUsers";
import { Container } from "@mui/system";
import PageHeader from "../../components/PageHeader";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import { Avatar, Box, Typography, Grid } from "@mui/material";
import mapUserToModel from "../helpers/normalization/mapUserToModel";

const ProfilePage = () => {
  const [userData, setUserData] = useState("");
  const { handleGetUser, value } = useUsers();
  const { isLoading, error, user } = value;

  useEffect(() => {
    handleGetUser(user._id).then((data) => {
      const mapUser = mapUserToModel(data);
      setUserData(mapUser);
    });
  }, [handleGetUser, user._id]);

  return (
    <Container>
      <PageHeader
        title="User Details"
        subtitle="Here you can find more details about your User"
      />
      {isLoading && <Spinner />}
      {error && <Error errorMessage={error} />}
      {userData != null && (
        <>
          <Grid
            container
            minHeight={180}
            mb={5}
            mt={5}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item>
              
                <Typography
                  variant="h4"
                  color="initial"
                >{`First name: ${userData.first}`}</Typography>
                <Typography
                  variant="h4"
                  color="initial"
                >{`Last name : ${userData.last}`}</Typography>
                <Typography
                  variant="h4"
                  color="initial"
                >{`Email : ${userData.email}`}</Typography>
                <Typography
                  variant="h4"
                  color="initial"
                >{`Phone : ${userData.phone}`}</Typography>
                <Typography
                  variant="h4"
                  color="initial"
                >{`Address : ${userData.street} ${userData.houseNumber}  ${userData.city}`}</Typography>
                   <Typography
                  variant="h4"
                  color="initial"
                >{`Buseness: ${user.isBusiness}`}</Typography>
                     <Typography
                  variant="h4"
                  color="initial"
                >{`Admin : ${user.isAdmin}`}</Typography>
             
            </Grid>
            <Grid item >
              
                <Avatar
                  alt="busienes card img"
                  src={userData.url}
                  sx={{ width: 350, height: 350 }}
                />
          
            </Grid>
          </Grid>
        </>
      )}
    </Container>
  );
};

export default ProfilePage;
