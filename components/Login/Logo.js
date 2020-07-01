//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

// create a component
const Logo = () => {
    return (
        <View >
            <Image 
            source={require('../../assets/logo1.png')} 
            style={{height:150,resizeMode:'contain'}}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
       backgroundColor:"#313131"
    },
});

//make this component available to the app
export default Logo;
