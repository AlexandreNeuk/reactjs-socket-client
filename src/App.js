import React, { Component } from "react";
import socketIOClient from "socket.io-client";

let IdDevice = 2345
let IdSoha = 1
let OrdemVenda = 'OV1234'

class App extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      endpoint: "http://localhost:3001/"
    }
    //
    this.socket = socketIOClient('http://localhost:3001/', {query: 'IdDevice=' + IdSoha +'&partner=soha&topic=seats'})
    //
    //this.socket = socketIOClient('http://localhost:3001/', {query: 'IdDevice=' + IdDevice +'&partner=Plenatech&topic=wifistatus'})
    //
    //this.socket = socketIOClient('http://localhost:3001/', {query: 'IdDevice=' + id +'&partner=soha&topic=seats'})
    //
    setInterval(() => this.checkSocket(), 5000)
  }

  componentDidMount() {
    //const { endpoint } = this.state;
    try {
      this.socket.on("Soha", data => this.setState({response_soha: data}))
      //
      //this.socket.on("Plenatech", data => this.setState({response_parceiro: data}))

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
        //this.socket = socketIOClient('http://localhost:3001/', {query: 'IdDevice=' + IdDevice + '&partner=Plenatech&topic=wifistatus'})
        //IdDevice++
        //console.log('LOG -> : ', socket.handshake)
    } catch (error) {
        
    }
  }

  render() {
    const { response_soha, response_parceiro } = this.state;

    return (
        <div>
              <div style={{ textAlign: "center" }}>
                  {response_soha
                      ? <p>
                        Soha dados: {response_soha._id}
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