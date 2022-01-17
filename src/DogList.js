//components
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
//css styling
import './DogList.css';

export default class DogList extends Component{
    render(){
        return (<div>
            <h1 className="display-1 text-center">Dog App!</h1>
            <div className="container">
                <div className="row">
                    {this.props.dogs.map(dog =>(
                        <div className="Dog col-lg-4 text-center" key={dog.name}>
                            <img src={dog.src} alt={dog.name}/>
                            <h3>
                                <Link className='underline' to={`/dogs/${dog.name}`}>
                                    {dog.name}
                                </Link>
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>);
    }
}