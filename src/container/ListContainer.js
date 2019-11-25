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
        console.log("date",this.task)

    }

    getTaskName(event){
        this.task.taskName = event.target.value
        console.log("taskName",this.task)
    }

    getDescription(event){
        this.task.description = event.target.value
        console.log("description",this.task)
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
                <ViewActivity output={this.state.task}></ViewActivity>
                <AddActivity Date={this.getDate.bind(this)}
                eventName = {this.getTaskName.bind(this)}
                eventDesc = {this.getDescription.bind(this)}
                add={this.addTask.bind(this)}
                ></AddActivity>
            </>
        )
    }
}

export default List