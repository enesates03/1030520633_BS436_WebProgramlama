import React from "react";
import ReactDOM from "react-dom";
import { Game } from "./game";

class App extends React.Component{
  render(){
    return(
      <div>  
        <Game/>   
      </div>
    )
  }
}
ReactDOM.render(<App/>,document.getElementById("root"));