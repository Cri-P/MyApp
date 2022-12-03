import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View, Text,Button} from "react-native";
import { StyleSheet} from 'react-native';


function WelcomeScreen({navigation}) {
    return (
        <View style={styles.container}>
        <Text style={styles.text}> Welcome to my Studio App</Text>
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
        color:"#0E8AFF",
        fontWeight: "bold",
        fontSize:20
    }
})



export default WelcomeScreen;