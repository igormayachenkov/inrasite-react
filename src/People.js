import React, { Component } from "react";
import './People.css';

class People extends Component {
    constructor(props) {
        super(props);
        this.people = [
            {id:1, name: 'Ivanov',  position:'sysadmin'}, 
            {id:2, name: 'Petrov',  position:'programmer'}, 
            {id:3, name: 'Sidorov', position:'programmer'}
        ];
      }
    
    render() {
        console.log("People RENDER");
        let items = this.people.map(p => 
            <div key={p.id} className='person'>
                <div className='name'>{p.name}</div>
                <img className='photo'/>
                <div className='position'>{p.position}</div>
                
            </div>
        );
        return (
          <div>
            <h1>People List</h1>
            {items}
          </div>
        );
      }
}
export default People;
