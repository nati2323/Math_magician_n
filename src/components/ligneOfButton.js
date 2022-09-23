/* eslint-disable */ 
export const LigneOfButton = (props) => {
  const {textBtns, order, handler } = props;
  let content;
  if (textBtns.length === 4) {
    content = (
      <div className="command-line" style={{ gridRow: `${order} / span 1` }}>
        <div className="simple-btn" onClick={handler}><span>{textBtns[0]}</span></div>
        <div className="simple-btn" onClick={handler}><span>{textBtns[1]}</span></div>
        <div className="simple-btn" onClick={handler}><span>{textBtns[2]}</span></div>
        <div className="op-btn" onClick={handler}><span>{textBtns[3]}</span></div>
      </div>
    );
  }
  if (textBtns.length === 3) {
    content = (
      <div className="command-line" style={{ gridRow: `${order} / span 1` }}>
        <div className="merge-btn" onClick={handler}><span>{textBtns[0]}</span></div>
        <div className="simple-btn" onClick = {handler}><span>{textBtns[1]}</span></div>
        <div className="op-btn" onClick = {handler}><span>{textBtns[2]}</span></div>
      </div>
    );
  }
  return content;
};
