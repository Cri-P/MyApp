import React from 'react';
import {View, Text,Button} from "react-native";
import { StyleSheet} from 'react-native';

function ProfileScreen(props) {
    return (
        <View style={styles.container}>
        <Text style={styles.text}> This is my Profile Page</Text>
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

export default ProfileScreen;