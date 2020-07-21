/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Button,
} from 'react-native';

const Todo = (props) =>(
  <View>
    <Text>{props.text}</Text>
    <Button title = "Delete" />
  </View>
)

class App extends React.Component {
  constructor(){
    super()
    this.state={
      todos: [{text: 'text 1'},{text: 'text 1'},{text: 'text 1'},],
    }
  }
  render(){
    return (
      <>
      <View>
      <Text> Todo App React Native </Text>
      {this.state.todos.map( todo => <Todo text={todo.text} />)}
      </View>
    
      </>
    );
  } 
};




export default App;
