import React, { Component } from "react";
import './People.css';

let month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

class People extends Component {
  constructor(props) {
      super(props);

      // State
      this.state = {
        departments:{}
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
                let departments={}
                data.forEach(p => {
                  // Find/create department
                  let name = p.pos_type;
                  let d = departments[name];
                  if(!d){
                    d = []
                    departments[name]=d;  
                  }
                  // Add to the department
                  d.push(p)
                });
                // Update state
                this.setState({departments:departments});
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
  
  renderPerson(p){
    let position = p.pos_type!='developers'?p.position:null // remove position for developers
    return (          
      <div key={p.id} className='person'>
      <div className='name'>{p.firstname} {p.lastname}</div>
      <img className='photo' alt="photo"/>
      <div className='position'>{position}</div>
      <div className='phone'>{p.phone}</div>
      <div className='mail'>{p.mail}</div>
      <div className='birthday'>{month[p.birthday_month-1]+' '+p.birthday_day}</div>
      </div>
    )}
    
  render() {
    console.log("People RENDER", this.state.departments);
    let dps = this.state.departments;
    if(dps.administration)  var administration = dps.administration.map(this.renderPerson);
    if(dps.developers)  var developers = dps.developers.map(this.renderPerson);
    if(dps.testers)  var testers = dps.testers.map(this.renderPerson);
    
    return (
      <div className='people-page'>
        <div className='header'>Administration</div>
        <div className='block'>{administration}</div>

        <div className='header'>Developers</div>
        <div className='block'>{developers}</div>

        <div className='header'>Testers</div>
        <div className='block'>{testers}</div>
      </div>
    );
  }
}
export default People;
