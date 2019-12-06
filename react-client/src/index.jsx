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
  }

  handleClickGet(){
    axios.get('/robots')
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
    })
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Robots. Your future. You're welcome (to postapocalyptic hell).
        </p>
      </header>
      <p>below, enter the name of one of the robots that will kill us all</p>
      <input type="text" onChange={e => this.setState({ model: e.target.value })} />
      <p>below, tell me how will it kill us</p>
      <input type="text" onChange={e => this.setState({ description: e.target.value })} />
      <br></br>
      <br></br>
      <button onClick={this.handleClickMake} type="button">Please, by all means, click here to add your robot. Which will help bring on the apocalypse</button>
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

