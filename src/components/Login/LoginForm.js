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
import {Actions} from 'react-native-router-flux';

export default class LoginForm extends Component {

    signup() {
		Actions.signup()
	}

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder="username or email" 
                    placeholderTextColor="#fff"
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    returnKeyType="next"
                    autoCorrect={false}
                    autoCapitalize="none"
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
                
                <View style={styles.signPassContainer}>
                    <TouchableOpacity onPress={this.signup}>
                        <Text style={styles.textSignPass}>Create Account</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.textSignPass}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
          
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        borderRadius: 20,
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginBottom: 10,
        color: '#fff',
        paddingHorizontal: 20
    },
    buttonContainer: {
        borderRadius: 20,
        backgroundColor: '#00BFFF',
        paddingVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        color: '#ffffff',
        fontWeight: '700'
    },
    signPassContainer: {
        top: 10,
        flexDirection: 'row',
		justifyContent: 'space-around'
    },
    textSignPass: {
        color: 'white',
		backgroundColor: 'transparent',
        
    }
});