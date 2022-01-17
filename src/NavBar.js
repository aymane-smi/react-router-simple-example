//component
import React, {Component} from 'react';
import {NavLink, Link} from 'react-router-dom';
export default class NavBar extends Component{
    render(){
        const links = this.props.links.map((link)=>(
            <li className="nav-item" key={link}>
              <NavLink className="nav-link" exact to={`/dogs/${link}`}>{link}</NavLink>
            </li>
         ));
        return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/dogs">Dogs App</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" exact to="/dogs">Home</NavLink>
            </li>
            {links}
          </ul>
        </div>
      </nav>)
    }
}