import React, { Component } from "react";
import './Devices.css';

class Devices extends Component {
  constructor(props) {
      super(props);

      // State
      this.state = {
        sortOrder:null,
        devices:[]
        //selectedId:null
      };
      // Handlers
      this.sortBy     = this.sortBy.bind(this);
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
                // Sort & Update state
                this.sortBy('code',data)
                //this.setState(state);
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



  sortBy(order, devices) {
    console.log("sortBy "+order);
    if(order==this.sortOrder) return;
    if(!devices) devices = this.state.devices

    this.setState({ 
      sortOrder: order,
      devices: devices.sort(this.compareFunctions[order]) 
    });
  }


  compareFunctions = {
    code:     (a,b)=>{return a.id - b.id;},
    name:     (a,b)=>{return a.name.localeCompare(b.name);},
    received:(a,b)=>{
      if(!a.received && !b.received) return 0;
      if(!a.received) return -1;
      if(!b.received) return  1;
      return a.received.localeCompare(b.received) 
    },
    owner:(a,b)=>{
      if(!a.owner && !b.owner) return 0;
      if(!a.owner) return -1;
      if(!b.owner) return  1;
      return a.owner.lastname.localeCompare(b.owner.lastname) 
    }
  }

  render() {
    console.log("devices RENDER");
    let items = this.state.devices.map(p => 
        <tr key={p.id} className='device'>
            <td className='code'>{p.id}</td>
            <td className='name'>{p.name}</td>
            <td className='content'>{p.content}</td>
            <td className='serial'>{p.serial}</td>
            <td className='received'>{p.received?p.received.slice(0,10):''}</td>
            <td className='owner'>{p.owner?(p.owner.firstname+' '+p.owner.lastname):''}</td>
        </tr>
    );
    return (
      <div className='devices-page'>
        <table>
            <thead>
              <tr>
                <TableHeader name='code'     active={this.state.sortOrder} onHeaderClick={this.sortBy} />
                <TableHeader name='name'     active={this.state.sortOrder} onHeaderClick={this.sortBy} />
                <th>content</th>
                <th>serial</th>
                <TableHeader name='received' active={this.state.sortOrder} onHeaderClick={this.sortBy} />
                <TableHeader name='owner'    active={this.state.sortOrder} onHeaderClick={this.sortBy} />
              </tr>
            </thead>
            <tbody>
                {items}
            </tbody>
        </table>
      </div>
    );
  }
}

class TableHeader extends Component {
  handleClick = () => {
    this.props.onHeaderClick(this.props.name);
  }

  render() {
    return (
      <th 
        className = {this.props.name==this.props.active?'active':'sortable'}
        onClick={this.handleClick}>
          {this.props.name}
      </th>
    );
  }
}

export default Devices;
