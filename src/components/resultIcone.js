import React from 'react';
export class ResultIcone extends React.Component {
    constructor(props){
        super(props)
        this.props = props;
    }
    render(){
        return <div className = "calculator-result"> <span> {this.props.total}</span> </div>
    }
}