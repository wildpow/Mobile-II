import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SignUp, SignIn, Contants } from './components';
import { StackNavigator } from 'react-navigation';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Welcome to Autherize</Text>
        <Text>Please choose an option</Text>
        <View style={buttonWrapper}>
          <Button title="Sign In" onPress={() => navigate('SignIn')}/>
          <Button title="Sign Up" onPress={() => alert('Pressed Button')}/>
          <Button title="Contents" onPress={() => alert('Pressed Button')}/>
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
    buttonWrapper: {
      flexDirection: 'row',
      justifyContent: 'center'
  }
});


const Routes = StackNavigator({
  Home: { screen: App },
  SignUp: { screen: SignUp },
  SignIn: { screen: SignIn },
  Contents: { screen: Contents }
});

export Routes;