import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import axios from 'axios'

const URL = 'https://mobile-server-ii.herokuapp.com'

class SignUp extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      email: '',
      password: '',
      error: null
    }
  }
    handleInputChange = (text, type) => {
      this.setState({
        [type]: text
      });
    }
    singUp = () => {
      const { email, password} = this.state
      
      axios.post(`${URL}/users`, {email, password})
        .then(responce => {
          const { token } = responce.data;
          AsyncStorage.setItem('token', token);
          the.props.navigation.navagate('Contents');
          console.log(responce)
        })
        .catch(error => {
          console.log(error)
          this.setState({error: 'Error on sin up'})
        });
        setTimeout(() => {
          this.setState({error: null})
        }, 3000)
    }
  

  render() {
    return (
      <View style={container}>
        <Text>
          Hello from SignUp
        </Text>
        <TextInput  onChangeText={(text)=> this.handleInputChange(text, 'email')} placeHolder="Email" style={inputStyles}/> 
      <TextInput onChangeText={(text)=> this.handleInputChange(text, 'password')} placeholder="Password" style={inputStyles}/>
      
      <Button title="Sign Up" onPress={()=> this.signUp}/>
    </View>
  )
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyles: {
    height: 30,
    width: 70,
    borderWidth: 1,
    borderColor: 'grey'
  }
});

const { container, inputStyles } = styles;

export default SignUp