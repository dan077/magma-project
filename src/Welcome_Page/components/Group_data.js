import React, {Component}from "react"

//import logo from '../assets/img/Logo.png'

export default  class Group_data extends Component {
    
    addTitle(title){
      return( 
        `
          <div class="row"> 
            <div class="col-md-12 col-lg-4 mb-4 mb-lg-0">
              <h2 class=""> <b>${title}</b> </h2> 
            </div>
          </div>
        `
      )
    }

    addElement(title,desc){
      return(
        `
        <div class="col-md-4 col-lg-4 d-flex">
          <div>
            <h3 class=" h4">${title}</h3>
            <p class="text-special">${desc}</p>
          </div>
        </div>`
      )
    }

    CreateTable(group_content_table)
    {
      var table = ''
      table += this.addTitle(group_content_table.title_table)
      
      if(group_content_table.content.length > 0)
      {
        var index = 0;
        var max = group_content_table.content.length;
        
        for(; index <= max ; index++)
        {
          if(index < max )
          {
          //crea las filas
          table +=  index === 0?  '<div class="row">' : index % 3 === 0? '</div><div class="row">' : '';
          //crea los elementos
          table += this.addElement(group_content_table.content[index].title, group_content_table.content[index].desc) 
          }
          else{
            table += '</div>';
          }
        }
        return table;
      }
    }

    render(){
        const group_content_table = this.props.group_content_table;

        return(
          <section id="fh5co-intro">
          <div className="container">
            <div className="row row-bottom-padded-lg">
              <div className="fh5co-block to-animate" style={{"border-top-right-radius": "7em 5em",
              "border-bottom-left-radius": "7em 5em"}}>
                <div className="overlay"></div>
                <div className="fh5co-text" dangerouslySetInnerHTML= {{__html: this.CreateTable(group_content_table)}} >
                 
                </div>
              </div>
            </div>
            
          </div>
        </section>
   
        )
    }
}
