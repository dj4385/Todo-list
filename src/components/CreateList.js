import React from 'react'

export const AddActivity = (props)=>{
    return(
        <>
            <div className="form-inline p-3">
                <input type="date" className="form-control mr-3" onChange={props.Date} ></input>
                <input type="text" placeholder="Enter Task Name" onChange={props.eventName} className="form-control mr-3"></input>
                <textarea row="10" col="10"  placeholder="Description" onChange={props.eventDesc} className="form-control mr-3" style={{resize:'none'}}></textarea>
                <input type="button" value="Add" onClick={()=>{
                    props.add()
                }} className="btn btn-primary"></input>
            </div>
        </>
    )
}