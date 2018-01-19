import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image
} from 'react-native';

export default class LoginForm extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput 
                    style={styles.input}
                >

                </TextInput>
                <TextInput 
                    style={styles.input}
                >
                    
                </TextInput>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        
    }
});