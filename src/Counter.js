
import React from 'react';

class Counter extends React.Component{

    constructor(){
        super()
        this.state={count:0}
    }
incrementcounter(){
    if (this.state.count<10){
    this.setState({
        count:this.state.count+1
    })}
    else{
        this.setState({count:0})
    }
}
render(){
    return(
        <div>
            <p>{this.state.count}</p>
            <button onClick={()=>this.incrementcounter()}>increment count</button>
        </div>
    )
}
}
export default Counter;