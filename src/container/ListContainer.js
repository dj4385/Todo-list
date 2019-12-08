import React from 'react'
import { ViewActivity } from '../components/ViewToDoList'
import { AddActivity } from '../components/CreateList'

class task{
    constructor(date,taskName,description){
        this.date = date
        this.taskName = taskName
        this.description = description
    }
}

class List extends React.Component{
    constructor(props){
        super(props)
        // this.task = {
            this._date = ""
            this._taskName = ""
            this._description = ""
        // }
        this.taskList = []
        this.state = {
            task : this.taskList
        }
    }

    getDate(event){
        this._date = event.target.value
    }

    getTaskName(event){
        this._taskName = event.target.value
    }

    getDescription(event){
        this._description = event.target.value
    }

    addTask(){
        if(this._date !== "" && this._taskName !== "" && this._description !== ""){
            var newTask = new task(this._date,this._taskName,this._description)
            console.log("New Task",newTask)
            this.taskList.push(newTask)
            this.setState({
                task : this.taskList
            }, ()=>{console.log("Final Output",this.state)})
        } else {
            alert("please enter values")
        }
    }

    render(){
        return(
            <>
                <AddActivity Date={this.getDate.bind(this)}
                eventName = {this.getTaskName.bind(this)}
                eventDesc = {this.getDescription.bind(this)}
                add={this.addTask.bind(this)}
                ></AddActivity>
                <ViewActivity output={this.state.task}></ViewActivity>
            </>
        )
    }
}

export default List