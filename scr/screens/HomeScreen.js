import React from 'react';
import {View, Text} from "react-native";
import { StyleSheet} from 'react-native';



function HomeScreen(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> This is the Home Page</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#D0B9DD',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize:20
    },
    text:{
        color:"#0E8AFF",
        fontWeight: "bold",
        fontSize:20
    }
})

export default HomeScreen;