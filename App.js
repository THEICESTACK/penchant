import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

import Login from './src/components/Login/Login';

import Routes from './src/Routes';

export default class App extends Component {
  
  render() {
    return (
        // <Login />
        <View style={styles.container}>
        <Routes/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
  }
});
