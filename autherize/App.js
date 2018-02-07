import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to Autherize</Text>
        <Text>Please choose an option</Text>
        <View>
          <TouchableOpacity>
            <Text>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
