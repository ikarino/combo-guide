import React from "react";
import styled from "styled-components";

const createStyle = size => {
  const fontSize = size * 0.7;
  return styled.div`
    .square {
      background: #fff;
      border: 1px solid #999;
      float: left;
      font-size: ${fontSize}px;
      font-weight: bold;
      line-height: ${size}px;
      height: ${size}px;
      margin-right: -1px;
      margin-top: -1px;
      padding: 0;
      text-align: center;
      width: ${size}px;
    }
    .square:focus {
      outline: none;
    }
    .board-row:after {
      clear: both;
      content: "";
      display: table;
    }
    .combo-map {
      padding-top: 0px;
      padding-bottom: 20px;
    }
  `;
};

const Square = ({ character, backgroundColor, color }) => {
  const bc = backgroundColor ? backgroundColor : "white";
  const c = color ? color : "black";
  return (
    <button className="square" style={{ color: c, background: bc }}>
      {character}
    </button>
  );
};

const Row = ({ data }) => {
  const squares = data.split("").map((c, index) => {
    if (c === "0") {
      return (
        <Square key={index} character="" backgroundColor="white" key={index} />
      );
    } else if (c === "r") {
      return <Square key={index} character="" backgroundColor="red" />;
    } else if (c === "g") {
      return <Square key={index} character="" backgroundColor="gray" />;
    } else if (c === "b") {
      return <Square key={index} character="" backgroundColor="blue" />;
    } else if (c === "1") {
      return <Square key={index} character="" backgroundColor="black" />;
    } else if (c === "仲" || c === "囮" || c === "巣") {
      return (
        <Square
          key={index}
          character={c}
          backgroundColor="white"
          color="blue"
        />
      );
    } else if (c === "ス" || c === "敵" || c === "弱") {
      return (
        <Square key={index} character={c} backgroundColor="white" color="red" />
      );
    } else if (c === "ポ") {
      return (
        <Square
          key={index}
          character={c}
          backgroundColor="blue"
          color="white"
        />
      );
    } else {
      return <Square key={index} character={c} backgroundColor="white" />;
    }
  });
  return <div className="board-row">{squares}</div>;
};

const ComboMap = ({ data, size }) => {
  // const pad = 40;
  // const { innerWidth: width, innerHeight: height } = window;
  // const defaultSquareSize =
  //  (width - pad) / data[0].length < 25 ? (width - pad) / data[0].length : 25;
  const defaultSquareSize = 20;
  const Style = size ? createStyle(size) : createStyle(defaultSquareSize);
  const rows = data.map((d, index) => {
    return <Row data={d} key={index} />;
  });
  return (
    <Style>
      <div className="combo-map">{rows}</div>
    </Style>
  );
};

export default ComboMap;
