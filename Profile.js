import React from 'react'

export default class Profile extends React.Component{
    constructor()
    {
        super();
        this.state={
            name:'ashu',
            email:'ashu@gmail.com'
        }
    }
        updateState()
        {
            this.setState({
                name:'jha'

            })
            
        
        
        }
    render()
    {
        return(
            <div>
                <h1>Hello {this.state.name}</h1>
                <h1>email: {this.state.email}</h1>
                <button onClick={()=>{this.updateState()}}>Update Name</button>
            </div>
        )
    }
}
//state