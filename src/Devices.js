import React, { Component } from "react";
import './Devices.css';

class Devices extends Component {
  constructor(props) {
      super(props);

      // State
      this.state = {
        devices:[]
        //selectedId:null
      };
      // Handlers
      //this.onItemClick = this.onItemClick.bind(this);
  }

  loadList(){
    console.log('load list... ');
    
    // ROOT NODES request
    fetch(global.API_URL+'/devices',{
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
                let state = {devices:data};
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
    console.log("devices RENDER");
    let items = this.state.devices.map(p => 
        <tr key={p.id} className='device'>
            <td className='code'>{p.id}</td>
            <td className='name'>{p.name}</td>
            <td className='content'>{p.content}</td>
            <td className='serial'>{p.serial}</td>
            <td className='received'>{p.received}</td>
            <td className='owner'>{p.owner?(p.owner.firstname+' '+p.owner.lastname):''}</td>
        </tr>
    );
    return (
      <div className='devices-page'>
        <table>
            <tr><th>#</th><th>Name</th><th>Content</th><th>Serial</th><th>Received</th><th>Owner</th></tr>
            <tbody>
                {items}
            </tbody>
        </table>
      </div>
    );
  }
}
export default Devices;
