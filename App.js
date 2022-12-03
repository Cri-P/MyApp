import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import WelcomeScreen from './scr/screens/WelcomeScreen';
import ProfileScreen from './scr/screens/ProfileScreen';
import HomeScreen from './scr/screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native"

const Tab = createBottomTabNavigator();

export default function App() {
  animationEnabled: true
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Welcome" component={WelcomeScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
