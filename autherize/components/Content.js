import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

class Contents extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const token = AsyncStorage.getItem(token);
    token
      .then(parsedToken => {
        alert(parsedToken)
      }).catch(err => {
        console.log(err)
      })
  }
  render() {
  return (
    <View>
      <Text>
      </Text>
    </View>
  )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const { container } = styles;

export default Contents