import React from 'react';
import { StyleSheet } from 'react-native';
import {View,Text, TouchableHighlight} from "react-native";

function MyButton({onPress=f=>f}) {
    return (
        <TouchableHighlight style={styles.button} underlayColor="#2C99FF"
        onPress={() => alert("Photos Below")}>
        <View>
        <Text style={styles.buttonText}>See Photos</Text>
        </View>

       </TouchableHighlight>

    );
}

const styles = StyleSheet.create({
    button:{
        margin:10,
        padding:10,
        borderWidth:3,
        borderColor: "#85C4FF", 
        backgroundColor:'#A2D2FF',
        borderRadius:20,
        alignSelf:'center',
        
    },
    buttonText:{
        fontSize:20,
        textAlign:"center",
        color: "#C4E2FF",
        fontWeight:"bold"
    },
});

export default MyButton;