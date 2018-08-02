import React, { Component } from 'react';
import ToDoItems from './components/todoItems';
import FlipMove from 'react-flip-move'
import './Todolist.css'
class TodoList extends Component{
  constructor(props){
    super(props);
    this.state = {
      items: []
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  addItem(e){
    if(this._inputElement.value !== ''){
      let newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };
      this.setState({
        // Never mutate this.state directly, as calling setState() afterwards may replace the mutation you made. Treat this.state as if it were immutable.
        items: [...this.state.items, newItem]
        
      });
      
    }
    this._inputElement.value = "";
    e.preventDefault();
  }
  deleteItem(key){
    let filterItem = this.state.items.filter(item => {return (item.key !== key)});
    this.setState({items: filterItem})
  }
  render(){
    
    return(
      <div className="todolistMain">
        <div className="header">
        <h1>To Do List</h1>
          <form onSubmit={this.addItem}>
            <input ref = {(inputEle) => this._inputElement = inputEle} placeholder="Enter Task"></input>
            <button type="submit">Add</button>
          </form>
        </div>
        <ToDoItems delete={this.deleteItem } entries={this.state.items}/>
      </div>
    );
  }
};


export default TodoList; 