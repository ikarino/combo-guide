import React, { useState, useEffect } from 'react';
import ComboMap from './ComboMap';

const ComboMovie = ({ datas, comments, second }) => {
  const [index, setIndex] = useState(0);

  const buttons = index === 0 ? (
    <div class="item shadow--md" style={{marginLeft: "auto", marginRight: "auto"}} >
      <button className="button button--outline button--secondary disabled">前</button>
      <button className="button button--outline button--secondary" onClick={() => setIndex(index+1)}>次</button>
      <button className="button button--outline button--secondary" onClick={() => setIndex(0)}>最初から</button>
    </div>
  ) : index === datas.length -1 ? (
    <div class="item shadow--md">
      <button className="button button--outline button--secondary" onClick={() => setIndex(index-1)}>前</button>
      <button className="button button--outline button--secondary disabled" >次</button>
      <button className="button button--outline button--secondary" onClick={() => setIndex(0)}>最初から</button>
    </div>
  ) : (
    <div class="item shadow--md">
      <button className="button button--outline button--secondary" onClick={() => setIndex(index-1)}>前</button>
      <button className="button button--outline button--secondary" onClick={() => setIndex(index+1)}>次</button>
      <button className="button button--outline button--secondary" onClick={() => setIndex(0)}>最初から</button>
    </div>
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col col-6" style={{border: "solid 1px", margin: "5px", paddingTop: "20px"}}>
          <ComboMap data={datas[index]} style={{float: "right"}} />
        </div>
        <div className="col col-6" style={{border: "solid 1px", margin: "5px"}}>
          <div style={{ paddingTop: "5px", paddingBottom: "5px" }}>
            <span style={{ backgroundColor: "lightgray", padding: "5px" }}>
              {index+1}/{datas.length}          
            </span>
          </div>
          {buttons}
          <p class="item shadow--md" style={{padding: "5px", border: "solid 1px", marginTop: "10px"}}>
            {comments[index]}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ComboMovie;