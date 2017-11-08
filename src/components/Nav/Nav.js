import React from "react";
import "./Nav.css";

class Nav extends React.Component {
  render() {
    console.log(this.props);
    return (
      <nav className="navbar navbar-light fixed-top myNav">
        <a className="navbar-brand mr-auto" href="#">
          <img src="/images/background.png" width="30" height="30" className="d-inline-block align-top" alt=""/> {this.props.brand}
        </a>

        {this.props.links.map((item, index) => {
          return (
            <a className="nav navbar" key={item.name + index} href={item.local}> {item.name} </a>
          )
        })}
      </nav>
    )
  }
}

export default Nav
