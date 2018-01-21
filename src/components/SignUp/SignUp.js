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

export default class SignUp extends Component {

    goBack() {
        Actions.pop();
    }

    render() {
        return (
            <View style={styles.container}>
				<TouchableOpacity style={styles.return} onPress={this.goBack}><Text> Sign in</Text></TouchableOpacity>
			</View>
          
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9447a5'
    },
    return: {
        borderRadius: 20,
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginBottom: 10,
        color: '#fff',
        paddingHorizontal: 20
    },
    title: {
        color: '#fff',
        marginTop: 10,
        width: 200,
        textAlign: 'center',
        opacity: 0.9
    }
})