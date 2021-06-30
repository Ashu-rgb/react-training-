import React from 'react'

//export default class Event extends React.Component
export default function Event() {
    //testFun(){alert("testFun")}
    //render()
    //{
    return (
        <div>
            <h1>Event</h1>
            <button onClick={() => { this.testFun.bind() }}>Click me</button>
        </div>
    )
}
//event
