import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View, Text,Button} from "react-native";
import { StyleSheet} from 'react-native';


function WelcomeScreen({navigation}) {
    return (
        <View style={styles.container}>
        <Text style={styles.text}> This is my Welcome Page</Text>
        <StatusBar style="auto" />
    </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#D0B9DD',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    text:{
        color:"#FFC8DD",
        fontWeight: "bold",
        fontSize:20
    }
})



export default WelcomeScreen;