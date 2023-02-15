import React, {  useState,useEffect } from "react";
import useUsers from "../hooks/useUsers";
import { Container } from "@mui/system";
import PageHeader from "../../components/PageHeader";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import { Avatar, Box, Typography } from "@mui/material";
import mapUserToModel from "../helpers/normalization/mapUserToModel";


const ProfilePage = () => {
  const [userData, setUserData] = useState("");
  const { handleGetUser, value } = useUsers();
  const { isLoading, error,user} = value;


useEffect(() => {
   handleGetUser(user._id)
.then(data => {
   const mapUser = mapUserToModel(data)
       setUserData(mapUser);
   })
   }, [handleGetUser, user._id]);

  return (
    <Container>
      <PageHeader
        title="User Details"
        subtitle="Here you can find more details about your User"
      />
      {isLoading && <Spinner />}
      {error && <Error errorMessage={error} />}
      {userData != null && (<> <Box className = "center" flexDirection={"column"}><Avatar
  alt="busienes card img"
  src={userData.url}
  sx={{ width: 200, height: 200 }}
/>
<Typography variant="h6" color="initial">{`Name: ${userData.first}`}</Typography>
<Typography variant="h6" color="initial">{`Last : ${userData.last}`}</Typography>
<Typography variant="h6" color="initial">{`Email : ${userData.email}`}</Typography>
<Typography variant="h6" color="initial">{`Phone : ${userData.phone}`}</Typography>
<Typography variant="h6" color="initial">{`Address : ${userData.street} ${userData.houseNumber}  ${userData.city}`}</Typography>
<Typography variant="h6" color="initial">{`Created At : ${userData.createdAt}`}</Typography>


</Box>
 </> )}
    </Container>
  );
};

export default ProfilePage;
