import React, { useEffect } from "react";
import useUsers from "../hooks/useUsers";
import { useNavigate } from "react-router-dom";
import initialUserForm from "../helpers/initialForms/initialUserForm";
import userSchema from "../models/joi-schema/userSchema";
import normalizeUserNoPassword from "../helpers/normalization/normalizeUserNoPassword";
import ROUTES from "../../routes/routesModel";

import { Container } from "@mui/material";
import UserFormNoPassword from "../components/UserFormNoPassword";
import useForm from "../../forms/hooks/useForm";
import mapUserNoPassword from '../helpers/normalization/mapUserNoPassword';

const EditUserPage = () => {
  const {
    handleUpdateUser,
    handleGetUser,
    value: { user },
  } = useUsers();
  const navigate = useNavigate();

  const { value, ...rest } = useForm(initialUserForm, userSchema, () =>
  handleUpdateUser(user._id, {
      ...normalizeUserNoPassword({ ...value.data }),
      isAdmin: user.isAdmin,
      
    })
  );

  useEffect(() => {
    handleGetUser(user._id).then(data => {
      if (!user._id) return navigate(ROUTES.CARDS);
      const modeledUser = mapUserNoPassword(data);
      rest.setData(modeledUser);
    });
  }, []);
  
  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <UserFormNoPassword
        title="Edit User form"
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        onFormChange={rest.validateForm}
        onInputChange={rest.handleChange}
        setData={rest.setData}
        errors={value.errors}
        data={value.data}
      />
    </Container>
  );
};

export default EditUserPage;
