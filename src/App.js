import React, { Component } from "react";
import socketIOClient from "socket.io-client";

let IdDevice = 1
let OrdemVenda = 'OV1234'

class App extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      endpoint: "http://localhost:3001/"
    }
    //
    //this.socket = socketIOClient('http://localhost:3001/', {query: 'IdDevice=' + IdDevice +'&partner=soha&topic=seats'})
    //
    this.socket = socketIOClient('http://localhost:3001/', {query: 'salesOrder=' + OrdemVenda +'&partner=parceiro&topic=tire'})
    //
    //this.socket = socketIOClient('http://localhost:3001/', {query: 'IdDevice=' + id +'&partner=soha&topic=seats'})
    //
    setInterval(() => this.checkSocket(), 5000)
  }
  componentDidMount() {
    //const { endpoint } = this.state;
    try {
      //this.socket.on("Soha", data => this.setState({response_teste: data}))
      //
      this.socket.on("parceiro", data => this.setState({response_parceiro: data}))

    } catch (error) {
      console.log('ERROR: ', error)
    }
    
    //
    //this.socket.on('Soha', function(data){ 
    //  this.setState({response_teste: data})
    //  console.log('LOG : ', data)
    // })
    
    //this.socket.on("Soha", data => this.setState({response_teste: data}))
    //const socket = socketIOClient(endpoint);
    //socket.on("Soha", {query: `IdDevice=1`}, data => this.setState({ response_teste: data }))
    //socket.on("parceiro", data => this.setState({ response_parceiro: data }))
  }

  checkSocket = async => {
    try {
      console.log('checkSocket id = ', IdDevice)
        this.socket = socketIOClient('http://localhost:3001/', {query: 'IdDevice=' + IdDevice + '&partner=soha&topic=seats'})
        IdDevice++
        //console.log('LOG -> : ', socket.handshake)
    } catch (error) {
        
    }
  }

  render() {
    const { response_teste, response_parceiro } = this.state;

    return (
        <div>
              <div style={{ textAlign: "center" }}>
                  {response_teste
                      ? <p>
                        teste dados: {response_teste[0]._id}
                      </p>
                      : <p>Loading...</p>}
                </div>
                <div style={{ textAlign: "center" }}>
                {response_parceiro
                    ? <p>
                      parceiro dados: {response_parceiro}
                    </p>
                    : <p>Loading...</p>}
              </div>  
        </div>      
    )
  }
}
export default App;

/*
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/