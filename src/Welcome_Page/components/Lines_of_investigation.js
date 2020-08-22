import React, {Component}from "react"

//import logo from '../assets/img/Logo.png'

export default class Lines_of_investigation extends Component {
    
    addTitle(title){

      return( 
        `
          <div class="col-md-12 section-heading text-left">
              <h2 class="left-border to-animate">${title}</h2> 
          </div> 
        `
      )
    }

    addElement(responsibles,desc,img){
      return(
        `
        <div class="col-md-6 col-sm-6 fh5co-service to-animate">
          <img src=${img}>
          <p class="text-white">${desc}</p>
          <p class="text-right muted">${responsibles}</p>
        </div>
        `
      )
    }

    CreateTable(lines_of_investigation)
    {
      var table = ''
      table += this.addTitle(lines_of_investigation.title_table)
      
      if(lines_of_investigation.content.length > 0)
      {
        var index = 0;
        var max = lines_of_investigation.content.length;
        
        for(; index <= max ; index++)
        {
          if(index < max )
          {
            //Agrega la fila
            table +=  index === 0?  '<div class="row">' : index % 2 === 0? '</div><div class="row espacio">' : '';
             //Agrega los elementos
            table +=  this.addElement(lines_of_investigation.content[index].responsibles, lines_of_investigation.content[index].desc,lines_of_investigation.content[index].img)
          }
          else
          {
            table += '</div>'
          }
         
        }
        return table;
      }
    }

    render(){
        const lines_of_investigation = this.props.lines_of_investigation;
        const navPropieties = this.props.navPropieties;
        return(
          <section id="fh5co-services" data-section={navPropieties.investigation[0].substring(1,navPropieties.investigation[0].length)}>
            <div className="container lineaInvestigacion" dangerouslySetInnerHTML= {{__html: this.CreateTable(lines_of_investigation)}}>
            </div>
        </section>
   
        )
    }
}
