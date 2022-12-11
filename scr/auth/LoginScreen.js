import React, {useEffect, useState} from 'react';
import {View} from "react-native";
import { Card, TextInput, Button} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { loginStyle } from './LoginStyle';
import { ScrollView, Text } from 'react-native';
import { Formik } from 'formik';
import { loginForm } from './LoginForm';
import { useSelector, useDispatch} from 'react-redux';
import store from '../store/store';
import LoginReducer from './LoginReducer';


export default function LoginScreen(props) { 

//    const{navigation}=props;
    const login = () => props.navigation.navigate("Home")
    //const signup = () => props.navigation.navigate("SignUp")

    //////////////////////////////

// useState
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState ("")

//related to Redux    

    const isEnable = useSelector(state => state.LoginReducer?.isEnable);
    const dispatch = useDispatch();

    useEffect; { () => {
        console.log("is data enabled ::", isEnable);
        if(username.length != 0 & password.length != 0) {
            dispatch(isEnableHandler(true));
        }else {
            dispatch(isEnableHandler(flase));
        }

    }, [username, password]};

    const isEnableHandler = (state) => ({
        type: "SET_IS_ENABLE",
        payload: state,
    })

    const setData = (type, data) =>{
        if (type === "username"){setUsername(data);
        }else {
            setPassword(data);
        }


    };

    ////////////////////////////////////

    return (
        <SafeAreaView style={loginStyle.container}>
        <ScrollView>
        <View>
            <Card.Title title="Photo Studio" titleStyle={loginStyle.cardtitle}></Card.Title>
            <Card.Content style={loginStyle.card}>
                <Formik
                    initialValues={{username:"", password:""}}
                    onSubmit={login}
                    validationSchema={loginForm}>
                    {({handleSubmit, handleChange, errors, setFieldTouched, touched}) => (
                        <>

                        <TextInput 
                        value = {username}
                        onChangeText={(data) => setData("username",data)}
                        style={loginStyle.textinput} backgroundColor="#eadcf2" textColor='#287D4D' 
                        label="Username" 
                        testID="username"
                        onChange={handleChange('username')}
                        onFocus={() => setFieldTouched('username')}/>

                        {
                            touched.username && errors.username ? 
                        <Text testID="error-username" style={{color:"red",backgroundColor:"white"}}>{errors.username}</Text>
                            : null
                        }
                        <TextInput 
                         value = {password}
                        onChangeText={(data) => setData("password",data)}


                        style={loginStyle.textinput} backgroundColor="#eadcf2" textColor='#287D4D' 
                        label="Password" 
                        testID='password'
                        secureTextEntry={true}
                        onChange={handleChange('password')}
                        onFocus={() => setFieldTouched('password')}/>

                        {
                            touched.password && errors.password ? 
                        <Text testID="error-password" style={{color:"red",backgroundColor:"white"}}>{errors.password}</Text>
                            : null
                        }

                        <Button 
                        onPress={()=> alert("without the code in LoginForm if Login is pressed it would go to Home")}
                        // onPress={handleSubmit}
                        testID="loginButton"
                        style={loginStyle.cardbutton} buttonColor='#D81159' textColor='#F5D68F' mode="contained">Login</Button>

                        <Button 
                        // onPress={signup}
                        onPress={()=>alert("signup soon")}
                        testID="signupButton"
                        style={loginStyle.cardbutton} buttonColor='#D81159' textColor='#F5D68F' mode="contained">Sign Up</Button>

                        </>
                    )}
                </Formik>            
            </Card.Content>
        </View>
        </ScrollView>
        </SafeAreaView>

    );
};
