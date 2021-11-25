import React from 'react';
import "./task_box.css";
import Task from "./Task";

class TaskBox extends React.Component {

	render(){
		return (
			<div className="tasks_box">
				{
					this.props.tasks.map((task,index) => {return <Task title={task.title} key={index} index={index} checked={task.checked} removeFunction={this.props.removeFunction} checkTaskFunction={this.props.checkTaskFunction}/>;})
				}
			</div>
		);
	}

}
export default TaskBox;