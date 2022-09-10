import React from 'react';
import './style.css';
class ResultIcone extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return <div className = "calculator-result"> <span> 0</span> </div>
    }
}
class LigneOfButton extends React.Component {
  constructor(props){
    super(props)
    this.props = props;
  }
  render() {
    const btnsText = this.props.textBtns;
    let content;
    const order = this.props.order;
    if(btnsText.length === 4){
      content = (
        <div className = 'command-line' style = {{gridRow: `${order} / span 1`}}>
          <div className ="simple-btn"><span>{btnsText[0]}</span></div>
          <div className ="simple-btn"><span>{btnsText[1]}</span></div>
          <div className ="simple-btn"><span>{btnsText[2]}</span></div>
          <div className ="op-btn"><span>{btnsText[3]}</span></div>
        </div>
        );
    }
    if(btnsText.length === 3){
      content = (
        <div className = 'command-line' style = {{gridRow: `${order} / span 1`}}>
          <div className ="merge-btn"><span>{btnsText[0]}</span></div>
          <div className ="simple-btn"><span>{btnsText[1]}</span></div>
          <div className ="op-btn"><span>{btnsText[2]}</span></div>
        </div>
        );
    }
    return content;
  }
}
class CalculatorDesign extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className = "calculator-container">
        <ResultIcone/>
        <LigneOfButton textBtns = {['AC', '+/-', '%','÷']} order = {2} />
        <LigneOfButton textBtns = {['7', '8', '9','x']} order = {3} />
        <LigneOfButton textBtns = {['4', '5', '6','-']} order = {4} />
        <LigneOfButton textBtns = {['1', '2', '3','+']} order = {5} />
        <LigneOfButton textBtns = {['0', '.','=']} order = {6} />
      </div>
    );
  }
}
export { ResultIcone, CalculatorDesign };