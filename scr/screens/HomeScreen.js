import React from 'react';
import {View, Text, TouchableOpacity} from "react-native";
import { StyleSheet} from 'react-native';


function HomeScreen(props) {


    return (
        <View style={styles.container}>
            <Text style={styles.text}> This is the Home Page</Text>
            <TouchableOpacity 
            onPress={()=>alert("Logout functionality to come soon")}
            style ={styles.button}><Text>{"Logout"}</Text></TouchableOpacity>
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
    },
    button:{
        padding: 10, 
        borderRadius:10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#D81159'
    

    }
})

export default HomeScreen;