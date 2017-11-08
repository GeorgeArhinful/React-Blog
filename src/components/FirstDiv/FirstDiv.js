import React from "react";
import "./FirstDiv.css";

class FirstDiv extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="articles">
        {this.props.data.map((item, index) => {
          return (

            <div className="container containDivs" key={item.name + index}>
              <div className="row">
                <div className="col-md-12">
                  <img className="img-fluid" src={item.src}/>
                  <h1>{item.header}</h1>
                  <h4>{item.subheader}</h4>
                  <p>Posted by {item.name} on {item.date}</p>
                </div>
              </div>
              <hr/>
            </div>

          )
        })}
      </div>
    )
  }
}

export default FirstDiv
