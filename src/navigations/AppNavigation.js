import { createStackNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";
import MainScreen from "../screens/MainScreen";
import HomeScreen from "../screens/HomeScreen";
import FlexScreen from "../screens/FlexScreen";


const TabNavigator = createBottomTabNavigator({ // Fait apparaitre une barre de navigation en bas de l'écran
  FlexScreen: FlexScreen,
  HomeScreen: HomeScreen,
  MainScreen: MainScreen,
});

export default createAppContainer(TabNavigator);