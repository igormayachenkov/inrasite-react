import React, { Component } from "react";
import './Gallery.css';

class Gallery extends Component {
  constructor(props) {
      super(props);

      // State
      this.state = {
        folders:[]
        //selectedId:null
      };
      // Handlers
      //this.onItemClick = this.onItemClick.bind(this);
  }

  loadList(){
    console.log('load list... ');
    
    // ROOT NODES request
    fetch(global.API_URL+'/api/gallery/folders',{
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
                // Update state
                this.setState({folders:data});
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
  
  renderFolder(f){
    return (          
      <div key={f.name} className='box'>
        <div>{f.title}</div>
        <div>{f.descr}</div>
      </div>
    )}
    
  render() {
    var rows = this.state.folders.map(this.renderFolder);
    
    return (
      <div className='page'>
        {rows}
      </div>
    );
  }
}
export default Gallery;
