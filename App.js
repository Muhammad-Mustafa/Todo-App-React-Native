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
  Switch,
  StyleSheet,
} from 'react-native';

 let id = 0;

 const styles = StyleSheet.create({
   todoContainer:{
     flexDirection: 'row',
     alignItems: 'center'
   },
   appContainer:{
    backgroundColor: 'white',
    padding: 10,
   },
   heading:{
     color: '#ea6f38',
     justifyContent: 'center',
     textAlign: 'center',
     fontWeight: 'bold',
     fontSize: 30,
   },
   button:{
     paddingHorizontal: 30,
   },
   fill:{
     flex:1,
   },
 })

const Todo = (props) =>(
  <View style={styles.todoContainer}>
    <Switch value={props.checked} onValueChange={props.onToggle} />
    <Button title = "Delete" onPress={props.deleteTodo} />
    <Text>{props.text}</Text>
  </View>
)

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      todos: [],
    }
  }

  addTodo(){
    id++;
    const text = `Todo number ${id}`
    this.setState({
      todos:[...this.state.todos, {id: id, text: text, checked: false},],
    })
  }

  deleteTodo(id){
    this.setState({
      todos: this.state.todos.filter(x => x.id !== id)
    })
  }

  toggleTodo(id){
    this.setState({
      todos: this.state.todos.map((todo) => {
        if(todo.id !== id) return todo;
        return({
          id: todo.id,
          text: todo.text,
          checked: !todo.checked,
        })

      })
    })
  }
  render(){
    return (
      <>
      <View style={styles.appContainer}>
        <Text style={styles.heading}> Todo App React Native </Text>
        
        <Button style={styles.button} title="Add todo" onPress={() => this.addTodo()}  />
        <Text>Total Number of Todos: {this.state.todos.length}</Text>
        <Text>Total Number of Checked Todos: {this.state.todos.filter((todo) => todo.checked == true).length}</Text>
        </View>
      <ScrollView style={styles.appContainer} >
        {this.state.todos.map( (todo) => <Todo 
                                            key={todo.id} 
                                            text={todo.text} 
                                            checked={todo.checked} 
                                            deleteTodo={() =>this.deleteTodo(todo.id)} 
                                            onToggle = {() => this.toggleTodo(todo.id)}
                                          />)}

      </ScrollView>
      </>
    );
  } 
};

export default App;
