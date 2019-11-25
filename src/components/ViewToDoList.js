import React from 'react'

export const ViewActivity = (props)=>{

    var outputJsx = props.output.map((ele,i)=>{
        return <div key="i" className="alet alert-primary text-left">
            <p>{ele.taskName}</p>
            <p>{ele.description}</p>
            <p>{ele.date}</p>
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