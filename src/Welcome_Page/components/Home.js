import React, {Component}from "react"
//import logo from '../assets/img/Logo.png'

export default class Home extends Component {
    
    render(){
        const homePropieties = this.props.homePropieties;
        
        return(
        <section id="fh5co-home" data-section="home" style={{backgroundImage: `url(${homePropieties.img_background})`}} data-stellar-background-ratio="0.5">
            <div className="gradient"></div>
            <div className="container">
              <div className="text-wrap">
                <div className="text-inner">
                  <div className="row">
                    <div className="col-md-8 col-md-offset-2" style={{marginTop : "-5em"}}>
                      <h1 className="to-animate">{homePropieties.title}</h1>
                      <h2 className="to-animate">{homePropieties.desc}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slant"></div>
          </section>
        )
    }
}