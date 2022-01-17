//component
import React, {Component} from "react";
import {Link} from 'react-router-dom';
//css styling
import './DogList.css';

export default class DogDetails extends Component{
    render(){
        let {dog} = this.props;
        return (
            <div className="container mt-5">
            <div className="dogDetails row justify-content-center">
                <div className="col-11 col-lg-5">
                    <div className="dogDetails-card card">
                        <img className="card-img-top" src={dog.src} alt={dog.name}/>
                        <div className="crad-body">
                            <h2 className="card-title">
                                {dog.name}
                            </h2>
                            <h4 className="card-subtitle text-muted">
                                {dog.age} years old
                            </h4>
                        </div>
                        <ul className="list-group list-group-flush">
                            {dog.facts.map((fact, i) =>(
                                <li className="list-group-item" key={i}>{fact}</li>
                            ))}
                        </ul>
                        <div className="card-body">
                            <Link to="/dogs" className="btn btn-info">Go Back</Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
} 