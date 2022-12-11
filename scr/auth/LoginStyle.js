import { StyleSheet } from "react-native";

export const loginStyle = StyleSheet. create({
    container:{
        display: "flex",
        flex:1,
        padding: 30,
        backgroundColor: '#D0B9DD',
        justifyContent: "center",      
    },
    card:{
       backgroundColor:"#D81159",
       marginTop:30,
       borderRadius:20,

    },
    cardtitle:{
        color: "#D81159"
    },
    cardbutton:{
        margin:4,
        marginLeft:0,
        marginRight:0,
    },
    textinput:{
        margin:4,
        marginTop:6,
        marginEnd:10
    },

})