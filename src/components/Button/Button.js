import React from "react";
import "./Button.css";

class Button extends React.Component {
  render() {
    return (
      <div>
        <div className="btns">
          <button className="btn btns-b">Other post</button>
        </div>
        <hr/>
      </div>
    )
  }
}

export default Button;
