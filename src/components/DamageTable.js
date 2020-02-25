import React from "react";
// import { Friend, } from "torneko3js"

const DamageTable = ({name, lv}) => {

  const trs = [0, 1, 2, 3, 4, 5, 6].map(weakenAtk => {
    const atk = 0;
    const min = 0;
    const mean = 0;
    const max = 0;
    return (
      <tr><td>{weakenAtk}</td><td>{atk}</td><td>{min}</td><td>{mean}</td><td>{max}</td></tr>
    )
  })
  return (
    <table style={{textAlign: "center"}}>
      <thead>
        <tr><th>弱化回数</th><th>攻撃力</th><th>最小</th><th>平均</th><th>最大</th></tr>
      </thead>
      <tbody>
        {trs}
      </tbody>
    </table>
  )
}
export default DamageTable;