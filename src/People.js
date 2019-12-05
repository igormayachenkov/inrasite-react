import React, { Component } from "react";
import './People.css';

class People extends Component {
  constructor(props) {
      super(props);

      // State
      this.state = {
        people:[]
        //selectedId:null
      };
      // Handlers
      //this.onItemClick = this.onItemClick.bind(this);
  }

  loadList(){
    console.log('load list... ');
    
    // ROOT NODES request
    fetch(global.API_URL+'/people',{
        method:'GET',
        credentials: "include",// to allow cookies
        headers: {
            'Content-Type':'application/json'
        }
    })
    .then(response => {
        response.json()
          .then(data=>{
              if(response.status===200){
                let state = {people:data};
                // Update state
                this.setState(state);
              }else{
                console.error(data);
                alert(data.message);
              }
          })
          .catch(err=>{
              alert('Response parcing error: '+err);    
          });
    })
    .catch(() => {
        alert('No internet connection found. App is running in offline mode.');
    });
  }

  componentDidMount() {
    console.log('Content did mount');
    // Dynamic load children
    //this.loadChildren(null);

    // Full List load
    this.loadList();
  }

  componentWillUnmount() {
    console.log('Content will unmount');
  }    
  
    
  render() {
    console.log("People RENDER");
    let items = this.state.people.map(p => 
        <div key={p.id} className='person'>
            <div className='name'>{p.firstname} {p.lastname}</div>
            <img className='photo' alt="photo"/>
            <div className='position'>{p.position}</div>
            <div className='phone'>{p.phone}</div>
            <div className='mail'>{p.mail}</div>
            <div className='birthday'>{p.birthday_day+'.'+p.birthday_month}</div>
        </div>
    );
    return (
      <div>
        {items}
      </div>
    );
  }
}
export default People;
