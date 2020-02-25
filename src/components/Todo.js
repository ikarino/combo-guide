import React from "react";

const Todo = ({children}) => (
  <div style={{padding: "20px", backgroundColor: "red", color: "white" }}>
    TODO: {children}
  </div>
)

export default Todo;