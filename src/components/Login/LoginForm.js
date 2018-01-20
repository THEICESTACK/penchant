import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native';

export default class LoginForm extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder="username or email" 
                    placeholderTextColor="#fff"
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    returnKeyType="next"
                    onSumbitEditing={() => this.passwordInput.focus()}
                />
                <TextInput 
                    placeholder="password"
                    placeholderTextColor="#fff"
                    secureTextEntry
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    returnKeyType="go"
                    ref={(input) => this.passwordInput = input}
                />

                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginBottom: 10,
        color: '#fff',
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        color: '#ffffff',
        fontWeight: '700'
    }
});