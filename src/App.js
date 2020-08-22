import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
/** Componentes **/
import NavBar from  './Welcome_Page/components/NavBar'
import Group_data from  './Welcome_Page/components/Group_data'
import Home from './Welcome_Page/components/Home'
import Lines_of_investigation from './Welcome_Page/components/Lines_of_investigation'
import Members from './Welcome_Page/components/Members'
/* informacion de los componentes :) */
import config from './Welcome_Page/config/config.json'

/* Importar css */
import "../src/Welcome_Page/assets/css/animate.css"
import "../src/Welcome_Page/assets/css/icomoon.css"
import "../src/Welcome_Page/assets/css/simple-line-icons.css"
import "../src/Welcome_Page/assets/css/magnific-popup.css"
import "../src/Welcome_Page/assets/css/bootstrap.css"
import "../src/Welcome_Page/assets/sass/blue.scss"
import "../src/Welcome_Page/assets/css/App.css"

function App() {
  //La razon por la que paso las propiedades de navegacion es para la data-nav-section.
  //Nota: hay agregar los data-nav-section (no hecho)
  return (
    <React.Fragment>
      <NavBar navPropieties = {config.navBar} />
      <Home homePropieties = {config.home} navPropieties = {config.navBar}/>
      <Group_data group_content_table = {config.group_data} navPropieties = {config.navBar}/>
      <Lines_of_investigation lines_of_investigation = {config.lines_of_investigation} navPropieties = {config.navBar}/>
      <Members members = {config.members} navPropieties = {config.navBar} />
    </React.Fragment>
  );
}

export default App;
