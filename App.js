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
  TextInput,
} from 'react-native';

 let id = 0;

const Todo = (props) =>(
  <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
    <Text>{props.text}</Text>
    <Button title = "Delete" onPress={props.deleteTodo} />
  </View>
)

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      todos: [],
    }
  }

  // handelInput =(text) =>{
  //   this.setState({
  //     todos:{
  //       id: id++,
  //       text: text,
  //     }
  //   })
  // }

  addTodo(){
    id++;
    const text = `Todo number ${id}`
    this.setState({
      todos:[...this.state.todos, {id: id, text: text},],
    })
  }

  deleteTodo(id){
    this.setState({
      todos: this.state.todos.filter(x => x.id !== id)
    })
  }
  render(){
    return (
      <>
      <ScrollView>
        <Text> Todo App React Native </Text>
        
        <Button title="Add todo" onPress={() => this.addTodo()} />

        {this.state.todos.map( (todo) => <Todo key={todo.id} text={todo.text} deleteTodo={() =>this.deleteTodo(todo.id)} />)}

      </ScrollView>
    
      </>
    );
  } 
};




export default App;
