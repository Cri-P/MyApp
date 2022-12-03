import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import WelcomeScreen from './scr/screens/WelcomeScreen';
import ProfileScreen from './scr/screens/ProfileScreen';
import HomeScreen from './scr/screens/HomeScreen';
import PhotosScreen from './scr/screens/PhotosScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import Ionic from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon:({focused, color, size}) => {
          let iconName;
          if (route.name ==="Welcome") {
            iconName = focused? "heart-circle" : "heart-circle-outline";
          }
          else if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          }
          else if (route.name === "Profile") {
            iconName = focused ? "body" : "body-outline";
          }
          else if (route.name === "MyPhotos") {
            iconName = focused ? "camera" : "camera-outline";
          }

          return <Ionic name ={iconName} size={size} color={color}/>
                },
        tabBarActiveTintColor: "#0E8AFF",
        tabBarInactiveTintColor: "#E8F4FF",
        tabBarStyle:{
          backgroundColor:"#A2D2FF",
          height:60,
        },
      })
    }
      >

      <Tab.Screen name="Welcome" component={WelcomeScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="MyPhotos" component={PhotosScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

