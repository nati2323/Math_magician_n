import React from 'react';
/*import calculate from '../logic/calculate';*/
export class LigneOfButton extends React.Component {
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
          <div className = 'command-line'  style = {{gridRow: `${order} / span 1`}}>
            <div className ="simple-btn" onClick = {this.props.handler}><span>{btnsText[0]}</span></div>
            <div className ="simple-btn" onClick = {this.props.handler}><span>{btnsText[1]}</span></div>
            <div className ="simple-btn" onClick = {this.props.handler}><span>{btnsText[2]}</span></div>
            <div className ="op-btn" onClick = {this.props.handler}><span>{btnsText[3]}</span></div>
          </div>
          );
      }
      if(btnsText.length === 3){
        content = (
          <div className = 'command-line' style = {{gridRow: `${order} / span 1`}}>
            <div className ="merge-btn" onClick = {this.props.handler}><span>{btnsText[0]}</span></div>
            <div className ="simple-btn" onClick = {this.props.handler}><span>{btnsText[1]}</span></div>
            <div className ="op-btn" onClick = {this.props.handler}><span>{btnsText[2]}</span></div>
          </div>
          );
      }
      return content;
    }
  }