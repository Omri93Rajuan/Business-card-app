import MuiSandbox from "./mui-sandbox/MuiSandbox";
// import StringInterpolation from "./StringInterpolation";
// import InlineStyle from "./styles/InlineStyle";
// import CompLogic from "./CompLogic";
// import FatherPropsObject from "./props/props-object/FatherPropsObject";
// import FatherPropsString from "./props/props-string/FatherPropsString";
// import FatherPropsTwoKeys from "./props/props-two-keys/FatherPropsTwoKeys";
// import Loops from "./Loops";
// import OnClick from "./events/OnClick";
// import RaisingEvents from "./events/RaisingEvents";
// import FatherAnyAndDefaultProps from "./propTypes/any-and-defaultProps/FatherAnyAndDefaultProps";
// import FatherArrayOfAndObjectOf from "./propTypes/arrays-and-objects/FatherArrayOfAndObjectOf";
// import FatherChildrenAndNode from "./propTypes/children-and-node/FatherChildrenAndNode";
// import FatherExactVsRequired from "./propTypes/exact-vs-required/FatherExactVsRequired";
// import FatherMainTypes from "./propTypes/main-types/FatherMainTypes";
// import FatherOneOfVsOneOfType from "./propTypes/oneOf-vs-oneOfType/FatherOneOfVsOneOfType";
// import FatherPropTypeError from "./propTypes/propType-error/FatherPropTypeError";
// import FatherShape from "./propTypes/shape/FatherShape";
// import UseState from "./hooks/use-state/UseState";
// import UseStateWithComplexObject from "./hooks/use-state/UseStateWithComplexObject";
// import UseStateWithFunction from "./hooks/use-state/UseStateWithFunction";
// import UseStateWithObject from "./hooks/use-state/UseStateWithObject";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import NavItem from "../routes/components/NavItem";
import { Outlet } from "react-router-dom";
import { useUser } from "../users/providers/UserProvider";
import { Navigate } from "react-router-dom";
import ROUTES from "../routes/routesModel";

const Sandbox = () => {
  const { user } = useUser();

  if (!user || !user.isAdmin) return <Navigate replace to={ROUTES.CARDS} />;

  return (
    <div>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <NavItem to="logic" label="comp-logic" sx={{ color: "black" }} />
          <NavItem to="mui-sandbox" label="MUI" sx={{ color: "black" }} />
          <NavItem
            label="life cycle hooks"
            to="life-cycle"
            sx={{ color: "black" }}
          />
          <NavItem
            label="custom counter hook"
            to="custom-counter-hook"
            sx={{ color: "black" }}
          />
          <NavItem
            label="custom name hook"
            to="custom-name-hook"
            sx={{ color: "black" }}
          />
          <NavItem
            label="memoization"
            to="memoization"
            sx={{ color: "black" }}
          />
          <NavItem label="form" to="form" sx={{ color: "black" }} />
          <NavItem label="context" to="context" sx={{ color: "black" }} />
          <NavItem label="use ref" to="use-ref" sx={{ color: "black" }} />
        </Toolbar>
      </AppBar>

      {/* <MuiSandbox /> */}
      {/* <CompLogic /> */}
      {/* <StringInterpolation /> */}
      {/* <InlineStyle /> */}
      {/* <FatherPropsString /> */}
      {/* <FatherPropsObject /> */}
      {/* <FatherPropsTwoKeys /> */}
      {/* <Loops /> */}
      {/* <OnClick /> */}
      {/* <RaisingEvents /> */}
      {/* <FatherPropTypeError /> */}
      {/* <FatherMainTypes /> */}
      {/* <FatherArrayOfAndObjectOf /> */}
      {/* <FatherOneOfVsOneOfType /> */}
      {/* <FatherExactVsRequired /> */}
      {/* <FatherShape /> */}
      {/* <FatherAnyAndDefaultProps /> */}
      {/* <FatherChildrenAndNode /> */}
      {/* <UseState /> */}
      {/* <UseStateWithFunction /> */}
      {/* <UseStateWithObject /> */}
      {/* <UseStateWithComplexObject /> */}
      {/* <UseStateWithArrayOfObjects /> */}
      {/* <SetPosts /> */}
      <Outlet />
    </div>
  );
};

export default Sandbox;
