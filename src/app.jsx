import React, { Component } from 'react';
import Habits from './components/habits';
import './app.css'
import Navbar from './components/navbar';
class App extends Component {
  
  state = {
    habits:[
        { id: 1, name: 'Reading', count: 0},
        { id: 2, name: 'coding', count: 0},
        { id: 3, name: 'Riding' ,count: 0}, 

    ],
    total:{
      count: 0
    }
  }
  
  handleIncrement = (habit) => {
    const habits = this.state.habits.map( item => {
      if( habit.id === item.id ){
        return {...habit, count: habit.count+1}; //habit 전체를 바꿔 레퍼런스를 바꾼다 beacause shallowCompare
      }
      return item;
    });
    this.setState({habits}); // key 와 value가 같다면 생략 가능
 }

 handleDecrement  = (habit) => {
   const habits = this.state.habits.map( item => {
     if(habit.id === item.id){
       const count = habit.count -1;
       return {...habit, count: count > 0 ? count : 0 };
     } return item;
     })
     this.setState({habits});

 }

 handleDelete = (habit) => {
    const habits = this.state.habits.filter(item =>{
      if(habit.id !== item.id) return item
    })
    this.setState({habits});
 }

 handleAdd = (name) => {
   const habits = [...this.state.habits, {id:Date.now(), name, count:0 }];
   this.setState({habits});
 }

 handleReset = () => {
    const habits = this.state.habits.map(habit => {
      if( habit.count !== 0){
        return {...habit, count: 0}
      }return habit
    })
    this.setState({habits})
 }
 
  render() {
    return (
      <>
        <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length}/>
        <Habits
         habits={this.state.habits}        
         onIncrement={this.handleIncrement}
         onDecrement={this.handleDecrement}
         onDelete={this.handleDelete}
         onAdd={this.handleAdd}
         onReset={this.handleReset}>
         </Habits>
      </>
    )
  }
}

export default App;