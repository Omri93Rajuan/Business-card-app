import React from "react";
import { Routes, Route } from "react-router-dom";
import ROUTES from "./routesModel";
import CardsPage from "../cards/pages/CardsPage";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import Sandbox from "../sandbox/Sandbox";
import LoginPage from "../users/pages/LoginPage";
import SignupPage from "../users/pages/SignupPage";
import CardDetailsPage from "../cards/pages/CardDetailsPage";
import CompLogic from "../sandbox/CompLogic";
import MuiSandbox from "../sandbox/mui-sandbox/MuiSandbox";
import TypographyComponent from "./../sandbox/mui-sandbox/data-display/TypographyComponent";
import MuiDivider from "./../sandbox/mui-sandbox/data-display/MuiDivider";
import LifeCycleHooks from "../sandbox/life-cycle-hooks/LifeCycleHooks";
import InitialCycle from "../sandbox/life-cycle-hooks/InitialCycle";
import UseStateCycle from "../sandbox/life-cycle-hooks/UseStateCycle";
import UseEffectAsComponentDidMount from "../sandbox/life-cycle-hooks/UseEffectAsComponentDidMount";
import UseEffectAsComponentDidUpdate from "../sandbox/life-cycle-hooks/UseEffectAsComponentDidUpdate";
import UseEffectAsComponentWillUnmount from "../sandbox/life-cycle-hooks/UseEffectAsComponentWillUnmount";
import UseEffectNoDependancies from "../sandbox/life-cycle-hooks/UseEffectNoDependancies";
import CustomCounterHook from "../sandbox/custom-hooks/CustomCounterHook";
import CustomName from "../sandbox/custom-hooks/CustomName";
import Memoization from "../sandbox/memoization/Memoization";
import UseCallback from "../sandbox/memoization/use-callback/UseCallback";
import UseMemo from "../sandbox/memoization/use-memo/UseMemo";
import A from "../sandbox/context/secondExe/components/A";
import FormTest from "../sandbox/forms/FormTest";
import UseRefVsUseState from "../sandbox/hooks/useRef/UseRefVsUseState";
import MyCardsPage from "../cards/pages/MyCardsPage";
import UseRefSandbox from "../sandbox/hooks/useRef/UseRefSandbox";
import UseRefCatchingEl from "../sandbox/hooks/useRef/UseRefCatchingEl";
import CreateCardPage from "../cards/pages/CreateCardPage";
import EditCardPage from "../cards/pages/EditCardPage";
import FavCardsPage from "../cards/pages/FavCardPage";
import ProfilePage from "../users/pages/ProfilePage";
import EditUserPage from "../users/pages/EditUserPage";
import CrmPage from "../users/pages/CrmPage";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<CardsPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.CARDS} element={<CardsPage />} />
      <Route path={ROUTES.CREATE_CARD} element={<CreateCardPage />} />
      <Route
        path={`${ROUTES.CARD_DETAILS}/:cardId`}
        element={<CardDetailsPage />}
      />
      <Route path={`${ROUTES.EDIT_CARD}/:cardId`} element={<EditCardPage />} />
      <Route path={ROUTES.MY_CARDS} element={<MyCardsPage />} />
      <Route path={ROUTES.FAV_CARDS} element={<FavCardsPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
      <Route path={ROUTES.USER_PROFILE} element={<ProfilePage />} />
      <Route path={ROUTES.EDIT_USER} element={<EditUserPage />} />
      <Route path={ROUTES.CRM} element={<CrmPage/>} />

      <Route path={ROUTES.SANDBOX} element={<Sandbox />}>
        <Route path="logic" element={<CompLogic />} />
        <Route path="use-ref" element={<UseRefSandbox />}>
          <Route path="catching-element" element={<UseRefCatchingEl />} />
          <Route path="no-rendering" element={<UseRefVsUseState />} />
        </Route>
        <Route path="custom-counter-hook" element={<CustomCounterHook />} />
        <Route path="custom-name-hook" element={<CustomName />} />
        <Route path="context" element={<A />} />
        <Route path="form" element={<FormTest />} />

        <Route path="memoization" element={<Memoization />}>
          <Route path="use-callback" element={<UseCallback />} />
          <Route path="use-memo" element={<UseMemo />} />
        </Route>

        <Route path="life-cycle" element={<LifeCycleHooks />}>
          <Route path="initial" element={<InitialCycle />} />
          <Route path="use-state-cycle" element={<UseStateCycle />} />
          <Route
            path="component-did-mount"
            element={<UseEffectAsComponentDidMount />}
          />
          <Route
            path="component-did-update"
            element={<UseEffectAsComponentDidUpdate />}
          />
          <Route
            path="component-will-unmount"
            element={<UseEffectAsComponentWillUnmount />}
          />
          <Route
            path="component-no-dependencies"
            element={<UseEffectNoDependancies />}
          />
        </Route>
        <Route path="mui-sandbox" element={<MuiSandbox />}>
          <Route path="typography" element={<TypographyComponent />} />
          <Route path="divider" element={<MuiDivider />} />
        </Route>
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

Router.propTypes = {};

export default Router;
