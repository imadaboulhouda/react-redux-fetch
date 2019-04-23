import React, {
  Component
} from 'react';
import './App.css';
import { connect } from 'react-redux'; 

class App extends Component{
   
  componentWillMount()
  {
    this.getData().then(e=>{
      
      this.props.addData(e.results);
    });
  
   
  }

   getData = async () => {
     let x = await fetch("https://randomuser.me/api/?results=10");
     return await x.json();
   }
  render()
  {
          return (<div className="App">
          <header className="App-header">
          <p>{this.props.age}</p>
          <ul>
          {
            this.props.fetchData.map(x => < li > {
                  x.email
                } < /li>) }
           </ul>
          <button onClick={this.props.addAge}>Add</button>
          <button onClick={this.props.moinAge}> Moins </button>
          </header>
        </div>
        );
  }

}


const mapStateToProps = (state)=>{
  return {
    age:state.age,
    fetchData:state.fetchData,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addAge:()=>dispatch({type:'AddAge'}),
    moinAge:()=>dispatch({type:'MoinAge'}),
    addData: (payload) => dispatch({
      type: 'fetchData',
      payload: payload
    }),

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
