import React, {Component}from "react"

//import logo from '../assets/img/Logo.png'

export default class Members extends Component {
    
    addTitle(title,desc){
      return( 
        `
        <div class="col-md-12 section-heading text-center">
				<h2 data-aos="fade-up">${title}</h2>
				<div class="row">
					<div class="col-md-8 col-md-offset-2 subtext" data-aos="fade-up">
						<h3>${desc}</h3>
					</div>
				</div>
			</div>
        `
      )
    }

    addElement(img,name,position,email){
      email = email === ""? "-":email;
      position = position === ""? "-":position;

      return(
        `
          <div class="col-md-4" data-aos="fade-down">
          <div class="fh5co-person text-center sizePerson">
            <figure><img src=${img} alt="Image"></figure>
            <h3>${name}</h3>
            <span class="fh5co-position">${position}</span>
            <p>Contacto: ${email}</p>
          </div>
        </div>
        `
      )
    }

    CreateTable(members)
    {
      var table = ''
      table += this.addTitle(members.title_table, members.desc_table)
      
      if(members.content.length > 0)
      {
        var index = 0;
        var max = members.content.length;
        
        for(; index <= max ; index++)
        {
          if(index < max )
          {
            //Agrega la fila
            table +=  index === 0?  '<div class="row">' : index % 3 === 0? '</div><div class="row" style="margin-top: 7em;">' : '';
             //Agrega los elementos
            table +=  this.addElement(members.content[index].img,members.content[index].name, members.content[index].position,members.content[index].email)
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
        const members = this.props.members;
        const data_section = this.props.data_section;
        return(
          <section id="fh5co-about" data-section={data_section}>
            <div className="container" dangerouslySetInnerHTML= {{__html: this.CreateTable(members)}}>
            </div>
          </section>
        )
    }
}
