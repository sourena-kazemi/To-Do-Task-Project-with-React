import React from 'react';
import "./task.css";

class Task extends React.Component {
	constructor(props){
		super(props);
		this.checkButton = React.createRef();
	}
	TaskClassName=()=>{
		if(this.props.checked){
			return "task task_checked";
		}else{
			return "task";
		}


	}
	checkTask=()=>{
		this.props.checkTaskFunction(this.props.checked,this.props.index);
	}
	TitleClassName=()=>{
		if(this.props.checked){
			return "task_title title_checked";
		}else{
			return "task_title";
		}
	}
	removeTask=()=>{
		this.props.removeFunction(this.props.index);
	}
	render(){
		return(
			<div className={this.TaskClassName()}>
				<p className={this.TitleClassName()}>{this.props.title}
					{/*text limit = 25 letters*/}
				</p>
				<div className="task_buttons">
					<input type="checkbox" className="task_checkbox" onChange={this.checkTask} ref={this.checkButton} checked={this.props.checked}/>
					<div className="remove_button_box" onClick={this.removeTask}>
						<div className="line line_one">

						</div>
						<div className="line line_two">

						</div>
					</div>
				</div>

			</div>
		);
	}
}

export default Task;