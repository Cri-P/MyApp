import React from 'react';
import { StyleSheet } from 'react-native';
import {View, Text, Image} from "react-native";
import MyButton from '../components/MyButton';
// import PhotoList from '../components/PhotosList';

function MyPhotos(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> These are my photos</Text>
            <MyButton/>
            {/* <PhotoList/> */}

 

        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#D0B9DD',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        color:"#0E8AFF",
        fontWeight: "bold",
        fontSize:20
        


    }
})

export default MyPhotos;