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
        backgroundColor: '#CDB4DB',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        color:"#FFC8DD",
        fontWeight: "bold"
    }
})

export default HomeScreen;