import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View, Text,Button} from "react-native";


function WelcomeScreen({navigation}) {
    return (
        <View>
        <Text> This is my Welcome Page</Text>
        <StatusBar style="auto" />
    </View>
    );
}





export default WelcomeScreen;