import React from 'react';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom" 
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
import AOS from 'aos';
import 'aos/dist/aos.css';

function navSection(string){
  return string.substring(1, string.length)
}

AOS.init({
  duration : 1000
})

function App() {

  //La razon por la que paso las propiedades de navegacion es para la data-nav-section.
  //Nota: hay agregar los data-nav-section (no hecho)
//<Route path="/" exact component={Home,Group_data,Lines_of_investigation,Members}></Route>
  return (
    <Router>
 
        <NavBar navPropieties = {config.navBar} />
          <Route exact path="/" component = {() => <Home homePropieties = {config.home} navPropieties = {config.navBar} /> }/>
          <Route exact path="/"  component = {() => <Group_data group_content_table = {config.group_data} navPropieties = {config.navBar}/>}/>
          <Route exact path="/"  component = {() => <Lines_of_investigation lines_of_investigation = {config.lines_of_investigation} data_section = {navSection(config.navBar.investigation[0])}/>} />
          <Members members = {config.members} data_section = {navSection(config.navBar.members[0])} />


    </Router>
  );
}

export default App;
