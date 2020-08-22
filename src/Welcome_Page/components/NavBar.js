import React, {Component}from "react"
//import logo from '../assets/img/Logo.png'

class NavBar extends Component {
    //esta fincion quitará el -> # 
    navSection(string){
      return string.substring(1, string[0].length)
    }

    render(){
        const navPropieties = this.props.navPropieties;
        
        return(
            <header role="banner" id="fh5co-header">
            <div className="container">
                <nav className="navbar navbar-default">
                <div className="navbar-header">
                    <a href="#" className="js-fh5co-nav-toggle fh5co-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i></i></a>
                 <a className="navbar-brand" href="index.html"><img src={navPropieties.logo[0]} style={{height: "1em"}}></img></a> 
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                  <ul className="nav navbar-nav navbar-right">
                    <li className="active"><a href={navPropieties.home[0]} data-nav-section="home"><span>{navPropieties.home[1]}</span></a></li>
                    <li><a href={navPropieties.investigation[0]}  data-nav-section={this.navSection(navPropieties.investigation[0])}><span>{navPropieties.investigation[1]}</span></a></li>
                    <li><a href="#" data-nav-section="testimonials"><span>Testimonials</span></a></li>
                    <li><a href="#" data-nav-section="servicess"><span>Services</span></a></li>
                    <li><a href="#" data-nav-section="about"><span>About</span></a></li>
                    <li><a href="#" data-nav-section="contact"><span>Contact</span></a></li>
                  </ul>
                </div>
                </nav>
          </div>
    </header>
        )
    }
}



export default NavBar;