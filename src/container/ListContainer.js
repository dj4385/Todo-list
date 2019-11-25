import React from 'react'
import { ViewActivity } from '../components/ViewToDoList'
import { AddActivity } from '../components/CreateList'

class List extends React.Component{
    constructor(props){
        super(props)
        this.task = {
            date: "",
            taskName: "",
            description : ""
        }
        this.taskList = []
        this.state = {
            task : this.taskList
        }
    }

    getDate(event){
        this.task.date = event.target.value
    }

    getTaskName(event){
        this.task.taskName = event.target.value
    }

    getDescription(event){
        this.task.description = event.target.value
    }

    addTask(){
        if(this.task.date !== "" && this.task.taskName !== "" && this.task.description !== ""){
            this.taskList.push(this.task)
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