import React, { Component } from 'react'
import FlipMove from 'react-flip-move'
class ToDoItems extends Component{
  constructor(props){
    super(props);

    this.createTasks = this.createTasks.bind(this);
  }
  createTasks(item){
    return <li onClick={() => this.delete(item.key)} key={item.key}>{item.text}</li>
  }
  delete(key){
    this.props.delete(key)
  }
  render(){
    let todoEntries = this.props.entries;
    let listItem = todoEntries.map(this.createTasks)
    return(
      <ul className="theList">
        <FlipMove duration={250} easing="ease-out"> 
          {listItem}
        </FlipMove>
      </ul>
    );
  }
}

export default ToDoItems;