import React from 'react';
import './style.css';
import { ResultIcone } from './resultIcone';
import { LigneOfButton } from './ligneOfButton';
import calculate from '../logic/calculate';
class CalculatorDesign extends React.Component {
  constructor(props){
    super(props)
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
    this.prev = null;
  }
  handleClick (e){
    console.log('clicked...')
    const target = e.target;
    const child = target.children;
    let targetElem;
    if (child.length > 0){
      targetElem = child[0];
    }else {
      targetElem = target;
    }
    const buttonName = targetElem.textContent;
    console.log(buttonName);
    this.setState(dataObject =>{
      const newState = calculate(dataObject,buttonName);
      return newState;
    });
  }
  
  render(){
    let res;
    if(Object.keys(this.state).length ===0){
      res = 0;
    }else{
      if (this.state.total){
        if(!this.state.operation){
          res = this.state.total;
        }else{
          if(!this.state.next){
            if(!this.prev){
              res = this.state.operation;
            }else{
              res = this.state.total;
            }
          }else{
            res = this.state.next;
          }

        }
      }else {
        if(this.state.operation){
          res = this.state.operation;
        }else {
          if(this.state.next){
            res = this.state.next;
          }else{
            res = 0;
          }
        }
      }
    }
    this.prev = this.state.next;
  
    return (
      <div className = "calculator-container">
        <ResultIcone total = {res}/>
        <LigneOfButton textBtns = {['AC', '+/-', '%','÷']} order = {2} handler = {this.handleClick}/>
        <LigneOfButton textBtns = {['7', '8', '9','x']} order = {3} handler = {this.handleClick}/> 
        <LigneOfButton textBtns = {['4', '5', '6','-']} order = {4} handler = {this.handleClick}/>
        <LigneOfButton textBtns = {['1', '2', '3','+']} order = {5} handler = {this.handleClick}/>
        <LigneOfButton textBtns = {['0', '.','=']} order = {6} handler = {this.handleClick}/>
      </div>
    );
  }
}
export { ResultIcone, CalculatorDesign };
