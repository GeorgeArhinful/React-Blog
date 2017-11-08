import React from "react";
import FontAwesome from "react-fontawesome";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="Footer">
        <div className="row top">
          <div className="col-12">
            {this.props.social.map((item,index) =>{
              return(
                <a href={item.url} key={item.iconName + index}> <FontAwesome name={item.iconName}/></a>
              )
            })}
          </div>
        </div>
        <div className="row ">
          <div className="col">
            <p>
              Email <strong>
                 georgearhinful442@gmail.com
              </strong>
            </p>
          </div>
          <div className="col">
            <p>Made by
              <strong> GEORGE ARHINFUL</strong>
            </p>
          </div>
          <div className="col">
            <p>
              <strong>copyrigth 2017</strong>
            </p>
          </div>
        </div>
      </div>

    )
  }
}

export default Footer
