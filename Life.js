import React from 'react';

class Life extends React.Component{

    constructor()
    {
      super();
      console.warn("constructor")
    }
    componentDidMount()
    {
        console.warn("omponentDidMount")
    }
    render()
    {
        console.warn("render")
        return(
            <div>
                <h1>Life Cycle Method</h1>
            </div>
        )
    }

}
export default Life;