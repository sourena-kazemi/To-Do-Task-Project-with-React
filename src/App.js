import React from 'react';
import './App.css';
import TaskBox from "./components/TaskBox";
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tasks:[{title:"Task",
                    checked:false
                   }
            ],
            inputValue:"",
        }
        this.taskInput = React.createRef();
    }
   getValue=(element)=>{
        this.setState({
            inputValue:element.target.value,
        })
  }
  addTask=()=>{
      let value = this.state.inputValue.trim();
      value = value.slice(0,24);
      let addValue = this.state.tasks.concat({title:value,checked:false});
      if(value !== "" && value !== null){
          this.setState({
              tasks:addValue,
          })
      }
      this.taskInput.current.focus();
      this.taskInput.current.value = "";
      this.setState({inputValue:""});
      this.saveTasks();
  }
  removeAllTasks=()=>{
        this.setState({
            tasks:[],
        })
  }
  removeTask=(taskIndex)=>{
      let tasksList = this.state.tasks;
      tasksList.splice(taskIndex,1);
      this.setState({
          tasks:tasksList
      })
  }
    getKeyValue=(event)=>{
        let keyValue = event.which;
        if(keyValue===13){
            this.addTask()
        }
    }
    checkTask=(taskChecked,taskIndex)=>{
        let tasksList = this.state.tasks;
        tasksList[taskIndex].checked = !taskChecked;
        this.setState({
            tasks:tasksList
        })
    }
    saveTasks=()=>{
        if(typeof(Storage) !== "undefined"){
        if(localStorage.savedTasks){
            localStorage.savedTasks = JSON.stringify(this.state.tasks);
            console.log(localStorage.savedTasks,this.state.tasks);
        }else{
            localStorage.savedTasks = JSON.stringify(this.state.tasks);
        }
        }
    }
    loadTasks=()=>{
        let loadedTasks = [];
        if(localStorage.savedTasks){
            loadedTasks=JSON.parse(localStorage.savedTasks);
        }
        this.setState({tasks:loadedTasks})
    }
    componentDidUpdate(){
        this.saveTasks();
    }
    componentDidMount(){
        this.loadTasks();
    }
  render() {
      return (
          <div className="app">
              <h1 className="title">To Do App</h1>
              <TaskBox tasks={this.state.tasks} removeFunction={this.removeTask} checkTaskFunction={this.checkTask}>
              </TaskBox>
              <div className="input_box">
                  <input type="text" className="task_input" placeholder="Add your task." onChange={this.getValue}
                  onKeyPress={this.getKeyValue} ref={this.taskInput}/>
                  <button className="add_button" onClick={this.addTask} >Add</button>
              </div>
                  <button className="remove_button" onClick={this.removeAllTasks}>Remove All Tasks!</button>
              </div>
      );
  }




}

export default App;
