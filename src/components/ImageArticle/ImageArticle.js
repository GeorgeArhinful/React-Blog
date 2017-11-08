import React from "react"
import "./ImageArticle.css"

class ImageArticle extends React.Component {
  render() {
    return (
      <div className="container ImageArticle">
        <div className="row">
          <div className="col">
            <img className="img-fluid" src={this.props.src1}/>
            <h3>{this.props.header}</h3>
            <h5>{this.props.para}</h5>
          </div>
          <div className="col">
            <img className="img-fluid" src={this.props.src2}/>
            <h3>{this.props.header}</h3>
            <h5>{this.props.para}</h5>
          </div>
          <div className="col">
            <img className="img-fluid" src={this.props.src3}/>
            <h3>{this.props.header}</h3>
            <h5>{this.props.para}</h5>
          </div>
        </div>
          <p>Posted by {this.props.name} on {this.props.date}</p>
        <hr/>
      </div>
    )
  }
}

export default ImageArticle;
