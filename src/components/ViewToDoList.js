import React from 'react'

export const ViewActivity = (props)=>{

    var outputJsx = props.output.map((ele,i)=>{
        return <div key={i} className="alert alert-primary text-left p-2 mb-4">
            <p><input type="checkbox" key={i}></input> <span className="h4">{ele.taskName}</span> <small>{ele.date}</small></p>
            <p>{ele.description}</p>
        </div>
    })

    return(
        <div className="row">
            <div className="col-lg-12">
                <div className="jumbotron">
                    {outputJsx}
                </div>
            </div>
        </div>
    )
}