import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import List from './List'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      robots: [],
      model: '',
      description: '',
    }
    this.handleClickGet = this.handleClickGet.bind(this);
    this.handleClickMake = this.handleClickMake.bind(this);
    this.handleInputModel = this.handleInputModel.bind(this);
  }

  componentDidMount(){
    // this.handleClickGet();
  }

  handleClickGet(){
    return axios.get('/robots')
    .then((robots) => 
    this.setState({
      robots: robots.data,
      })
    )
  }

  handleClickMake(){
    axios.post('/makeRobot', {
      model: this.state.model,
      description: this.state.description,
    });
    this.setState({
      model: '',
      description: '',
    })
  }

  handleInputModel(e){
    this.setState({
      model: e.target.value
    })
  }

  handleInputDescription(e){

  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Robots. Your future. You're welcome (to postapocalyptic hell).
        </p>
      </header>
      {/* <p>below, enter the name of one of the robots that will kill us all</p> */}
      <input type="text" placeholder="enter robot name" onChange={e => this.handleInputModel(e)} />
      {/* <p>below, tell me how will it kill us</p> */}
      <input type="text" placeholder="enter how it'll kill us" onChange={e => this.setState({ description: e.target.value })} />
      <br></br>
      <br></br>
      <button onClick={this.handleClickMake} type="button">click here to add your robot to the directory</button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <button onClick={this.handleClickGet} type="button"> Click here to see the robots that will murder you</button>
      <div>
        <List robots={this.state.robots} />
      </div>
    </div>
  );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

