import React from 'react';
import { StyleSheet } from 'react-native';
import {View, Text} from "react-native";
import MyButton from '../components/MyButton';

function MyPhotos(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> These are my photos</Text>
            <MyButton/>
            
        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#D0B9DD',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text:{
        color:"#FFC8DD",
        fontWeight: "bold",
        fontSize:20
        


    }
})

export default MyPhotos;