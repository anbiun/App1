//import liraries
import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Logo from '../components/Login/Logo'
import UserPass from '../components/Login/UserPass'
import { useDispatch } from 'react-redux';
import * as productActions from '../store/actions/products'


const LoginScreen = props => {
        const dispatch = useDispatch();

        useEffect(() => {
                dispatch(productActions.fetchMember());
        }, [dispatch]);
console.log(productActions);

        return (
                <View style={styles.container}>
                        <Logo />
                        <UserPass />
                        <TouchableOpacity style={styles.button}
                                onPress={() => { props.navigation.navigate('ProductsOverview') }}
                        >
                                <Text style={styles.buttonText}>Sign in</Text>
                        </TouchableOpacity>
                </View>

        );
}

const styles = StyleSheet.create({
        container: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
        },
        button: {
                width: 300,
                backgroundColor: '#1c313a',
                borderRadius: 25,
                marginVertical: 10,
                paddingVertical: 12,
        },
        buttonText: {
                fontSize: 18,
                fontWeight: '500',
                color: '#fff',
                textAlign: 'center',
        },
});

//make this component available to the app
export default LoginScreen;
