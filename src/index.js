import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  InitialScreen,
  Dashboard
} from "./screens";

const Router = createStackNavigator(
  {
    HomeScreen,
    LoginScreen,
    RegisterScreen,
    ForgotPasswordScreen,
    Dashboard,
    InitialScreen
  },
  {
    initialRouteName: "InitialScreen",
    headerMode: "none"
  }
);

export default createAppContainer(Router);
