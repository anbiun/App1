import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import Logo from './Logo'
import UserPass from './UserPass'

// create a component
const LoginForm = () => {
    return (
        <View style={styles.container}>
            <Logo />
            <UserPass />
            <TouchableOpacity style={styles.button} >
                <Text style={styles.buttonText}>Sign in</Text>
            </TouchableOpacity>
        </View>

    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',

    },
    userPass: {


    },
});

export default LoginForm