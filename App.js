import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import WelcomeScreen from './scr/screens/WelcomeScreen';
import ProfileScreen from './scr/screens/ProfileScreen';
import HomeScreen from './scr/screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
// import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      // screenOptions={({routes}) => ({
      //   headerShown: false,
      //   tabBarIcon:({color, size}) => {
      //     return <Icon size={22} color={"#BDE0FE"} />

      //   }

      // })}
      >
      <Tab.Screen name="Welcome" component={WelcomeScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

