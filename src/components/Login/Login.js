import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image
} from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../../images/logo.png')} />

                        <Text style={styles.title}>An app made for dating using React Native</Text>
                        <View style={styles.formContainer}>
                            <LoginForm />
                        </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db'
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 100
    },
    title: {
        color: '#fff',
        marginTop: 10,
        width: 200,
        textAlign: 'center',
        opacity: 0.9
    }
})