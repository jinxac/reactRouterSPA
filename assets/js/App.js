import React from 'react'
import { Link } from 'react-router';


var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};




class App extends React.Component{
  
	constructor(){
		super();
        this.isMobile=isMobile.any()
	}

  _handleOnClick(e){
  	   if(this.isMobile)
    	{
    		return true;
    	}
    	return false;
  }

  render(){
  var href = this.props.history.createHref('/about');
  return(
  	<div>
		<div>hello router</div>
		 {this.isMobile ? <a href={href}>About</a> : <Link to='/about'>About</Link>}
		 <Link to="/contact">Contact</Link>
	</div>
  )
}
}

export default App;
