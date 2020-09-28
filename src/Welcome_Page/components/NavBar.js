import React, {Component}from "react"
import {Link} from "react-router-dom"
//import logo from '../assets/img/Logo.png'

class NavBar extends Component {
    //esta fincion quitará el -> # 
    navSection(string){
      return string.substring(1, string.length)
    }

    elementNav(navPropieties)
    {
      var elements = ""
      for (var i in navPropieties)
      {
        if(navPropieties[i][1] !== 'logo'){
          elements += `
                      <li>
                        <a href="/a"  data-nav-section=${this.navSection(navPropieties[i][0])}>
                          <span>${navPropieties[i][1]}</span>
                        </a>
                      </li> 
                    ` 
        }
      }
      return elements
        
    }


    render(){
        //np = navPropieties
        const navPropieties = this.props.navPropieties;
      //  alert(navPropieties.investigation[0].substring(1, navPropieties.investigation[0].length))
        return(
            <header role="banner" id="fh5co-header">
            <div className="container">
                <nav className="navbar navbar-default">
                <div className="navbar-header">
                    <a href="#" className="js-fh5co-nav-toggle fh5co-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i></i></a>
                 <a className="navbar-brand" href="index.html"><img alt = "logo" src={navPropieties.logo[0]} style={{height: "1em"}}></img></a> 
                </div>
                
                <div id="navbar" className="navbar-collapse collapse">
                  <ul className="nav navbar-nav navbar-right" dangerouslySetInnerHTML= {{__html: this.elementNav(navPropieties)}}>

                  </ul>
                </div>
                
                </nav>
          </div>
    </header>
        )
    }
}



export default NavBar;