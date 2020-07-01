//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TextInput,  } from 'react-native-gesture-handler';
// create a component

const UserPass = ({navigation})  => {
    return (
        <View>
            <TextInput style={styles.inputBox}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder="User"
                placeholderTextColor="#000"
            />

            <TextInput style={styles.inputBox}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder="Password"
                placeholderTextColor="#000"
            />

        </View>
    );
}



// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    inputBox: {
        width: 300,
        backgroundColor: 'rgba(50, 156, 217,0.3)',
        borderRadius: 25,
        paddingHorizontal: 16,
        color: '#000',
        marginVertical: 10,
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
export default UserPass;
