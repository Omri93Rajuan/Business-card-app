import React, { useEffect } from "react";
import useUsers from "../hooks/useUsers";
import { useNavigate } from "react-router-dom";
import initialUserForm from "../helpers/initialForms/initialUserForm";
import userSchema from "../models/joi-schema/userSchema";
import normalizeUser from "../helpers/normalization/normalizeUser";
import ROUTES from "../../routes/routesModel";

import { Container } from "@mui/material";
import UserForm from "../components/UserForm";
import useForm from "../../forms/hooks/useForm";
import mapUserToModel from '../helpers/normalization/mapUserToModel';

const EditUserPage = () => {
  const {
    handleUpdateUser,
    handleGetUser,
    value: { user },
  } = useUsers();
  const navigate = useNavigate();

  const { value, ...rest } = useForm(initialUserForm, userSchema, () =>
  handleUpdateUser(user._id, {
      ...normalizeUser({ ...value.data }),
      isAdmin: user.isAdmin,
    })
  );

  useEffect(() => {
    handleGetUser(user._id).then(data => {
      if (!user._id) return navigate(ROUTES.CARDS);
      const modeledUser = mapUserToModel(data);
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
      <UserForm
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
