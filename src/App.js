import React,{Component} from 'react'
import './App.css';
import Plan from "./plan"

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
class App extends Component {
  state = {
    items:[],
    text:""
  }
  handleChange = e => {this.setState({text:e.target.value})}
  handleClick=e=>{
    if(this.state.text!==""){
      const items=[...this.state.items,this.state.text];
      this.setState({items:items,text:""});
    }
  }
  handleDelete= id =>{
    console.log("Deleted",id);
    const Olditems =[...this.state.items]
    console.log("Olditems",Olditems);
    const items=Olditems.filter((element ,i) => {return i!==id})
    console.log("Newitems", items);
    this.setState({items :items});
  }
  render() {
    return (
      <div className='container-fluid my-5'>
        <div className='row'>
          <div className="col-sm-6 mx-auto shadow-lg p-3">
            <h1 className='text-center'>Today's Plan</h1>
            <div className='row'>
              <div className='col-9'>
                <input type="text" className='form-control' placeholder='What are you doing today!' value={this.state.text} onChange={this.handleChange} />
              </div>
              <div className='col-2'>
                <button className='btn btn-warning px-5 button-weight-bold' onClick={this.handleClick}>Add</button>
              </div>
              <div className='container-fluid'>
                <ul className='list-unstyled row m-5'>
                 {
                  this.state.items.map((value,i)=>{
                    return <Plan key={i} id={i} value={value} sendData={this.handleDelete}  />
                  })
                 }
                </ul>
              </div>
            </div>

          </div>
          </div>
      </div>
    )
  }
}


export default App;
