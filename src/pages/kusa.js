import React, { useState } from 'react';
import { useCookies, CookiesProvider } from 'react-cookie';
import Layout from '@theme/Layout';

const Kusa = () => {
  const [currentSet, setCurrentSet] = useState(["", ""]);
  const [cookies, setCookies] = useCookies(['kusa']);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!currentSet[0] || !currentSet[1]) {
      return;
    }
    let newNames = [];
    if (cookies.kusa) {
      for(const name of cookies.kusa) {
        newNames.push(name);
      }
    }
    newNames.push(currentSet);
    setCookies('kusa', newNames);
    setCurrentSet(["", ""]);
    console.log(currentSet);
  }

  const deleteName = (index) => {
    const newNames = cookies.kusa.filter((name, i) => i !== index);
    setCookies('kusa', newNames);
  }

  const nameList = cookies.kusa ? cookies.kusa.map((name, index) => (
    <div className="col col--4" key={index}>
      <div className="card card--primary"  style={{margin: "3px"}}>
      <div className="card__header">
        <h4>{name[0]}</h4>
      </div>
      <div className="card__body">
        <h4>{name[1]}</h4>
        </div>
      <div className="card__footer">
        <button onClick={() => deleteName(index)}  className="button button--outline button--primary">
          削除
        </button>
      </div>
      </div>
    </div>
  )) : null;

  return (
    <Layout>
      <CookiesProvider>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col col--4">
               <label>
                色とか名前：
                <input 
                  type="text" 
                  defaultValue={currentSet[0]} 
                  onChange={(e) => {
                    setCurrentSet([e.target.value, currentSet[1]])
                  }} 
                />
                </label>
              </div>
              <div className="col col--4">
                <label>
                  効果：
                  <input 
                    type="text" 
                    defaultValue={currentSet[1]} 
                    onChange={(e) => {
                      setCurrentSet([currentSet[0], e.target.value])
                    }} 
                  />
                </label>
              </div>
              <div className="col col--4">
                <button className="button button--outline button--primary">追加</button>
              </div>
            </div>
          </form>
          <div className="row">
            {nameList}
          </div>
         </div>
      </CookiesProvider>
    </Layout>
  )
}

export default Kusa;