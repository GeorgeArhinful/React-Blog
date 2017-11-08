import React from "react";
import {Adinkra} from "react-adinkra";
import "./Header.css"
class Header extends React.Component {
  render() {
    return (
<div className="header-container">

  <div className="header-background"></div>
  <div className="">
    <div className="header">
      <h1>{this.props.header}</h1>
      <p> LeT ShEaR   <samp><Adinkra name={'nea-onnim-no-sua-a-oh'}/></samp>   InFo </p>
    </div>
    {/* <div ><img className="img" src="https://vignette.wikia.nocookie.net/monster/images/6/6e/DragonRed.jpg/revision/latest?cb=20160809235604"/></div> */}

  </div>
</div>


    )
  }
}

export default Header
