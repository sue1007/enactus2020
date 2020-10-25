import { Platform } from "react-native";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "../screens/homepage";
import ContactScreen from "../screens/contact";
import VisualScreen from "../screens/visuals";

const AppNavigator = createStackNavigator(
  {
    ScreenHome: { screen: HomeScreen },
    //  ScreenContact: { screen: ContactScreen },
    //  ScreenVisual: { screen: VisualScreen },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? "lightgray" : "",
      },
      headerTintColor: Platform.OS === "android" ? "white" : "blue",
      headerShown: false,
    },
  }
);

export default createAppContainer(AppNavigator);
