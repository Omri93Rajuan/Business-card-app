import { useState, useCallback, useMemo } from "react";
import useAxios from "../../hooks/useAxios";
import {
  deleteUser,
  editUserData,
  getUserData,
  getUsers,
  login,
  signup,
  changeBusinessStatus,
} from "../services/usersApiService";
import {
  getUser,
  removeToken,
  setTokenInLocalStorage,
} from "../services/localStorageService";
import { useUser } from "../providers/UserProvider";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import normalizeUser from "../helpers/normalization/normalizeUser";
import { useSnackbar } from "../../providers/SnackbarProvider";

const useUsers = () => {
  const [users, setUsers] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { user, setUser, setToken } = useUser();

  useAxios();
  const snack = useSnackbar();

  const requestStatus = useCallback(
    (loading, errorMessage, users, user = null) => {
      setLoading(loading);
      setUsers(users);
      setUser(user);
      setError(errorMessage);
    },
    [setUser]
  );

  const handleLogin = useCallback(async (user) => {
    try {
      const token = await login(user);
      setTokenInLocalStorage(token);
      setToken(token);
      const userFromLocalStorage = getUser();
      requestStatus(false, null, null, userFromLocalStorage);
      navigate(ROUTES.CARDS);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleLogout = useCallback(() => {
    removeToken();
    setUser(null);
    navigate(ROUTES.CARDS);
  }, [navigate, setUser]);

  const handleSignup = useCallback(
    async (userFromClient) => {
      try {
        const normalizedUser = normalizeUser(userFromClient);
        await signup(normalizedUser);
        await handleLogin({
          email: userFromClient.email,
          password: userFromClient.password,
        });
      } catch (error) {
        requestStatus(false, error, null);
      }
    },
    [requestStatus, handleLogin]
  );
  const handleGetUser = useCallback(async (userId) => {
    try {
      setLoading(true);
      const user = await getUserData(userId);
      requestStatus(false, null, null, user);
      return user;
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleGetUsers = useCallback(async () => {
    try {
      setLoading(true);
      const users = await getUsers();
      requestStatus(false, null, users, user);
      return users;
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, [requestStatus, user]);

  const handleUpdateUser = useCallback(async (userId, userFromClient) => {
    try {
      setLoading(true);
      const user = await editUserData(userId, userFromClient);
      requestStatus(false, null, null, user);
      handleLogout()
      snack("success", "The business user has been successfully updated, now sign in again");
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleDeleteUser = useCallback(
    async (userId) => {
      try {
        setLoading(true);
        await deleteUser(userId);
        snack("success", "The business card has been successfully deleted");
      } catch (error) {
        requestStatus(false, error, null);
      }
    },
    [snack]
  );

  const handleChangeBusinessStatus = useCallback(
    async (userId, userFromClient) => {
      try {
        setLoading(true);
        const user = await changeBusinessStatus(userId, userFromClient);
        requestStatus(false, null, users, user);
        snack("success", "The business user has been successfully updated");
      } catch (error) {
        requestStatus(false, error, null);
      }
    },
    [requestStatus, snack, users]
  );

  const value = useMemo(
    () => ({ isLoading, error, user, users }),
    [isLoading, error, user, users]
  );

  return {
    value,
    handleLogin,
    handleLogout,
    handleSignup,
    handleGetUser,
    handleUpdateUser,
    handleGetUsers,
    handleDeleteUser,
    handleChangeBusinessStatus,
  };
};

export default useUsers;
