import React, {Component} from 'react';
import {Input} from 'reactstrap';
 
export default class SearchIndex extends Component {
  constructor(props){
    super(props);
    this.state = {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
      searchTerm: '',
    }
  }

  searchFunction = () => {
    return this.state.things.filter(thing => thing.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    
  }

  searchTermChange = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  render() {
    return(
      <div>
        <Input type="text" value={this.state.searchTerm} onChange={this.searchTermChange} placeholder='Search Here' />
        <h3>Results:</h3>
        <ResultsContainer things = {this.searchFunction()} />
      </div>
    )
  }
  

}

class ResultsContainer extends Component {
  render() {
    return(
      <div>
        {this.props.things.map(thing => <Thing thing = {thing} />)}
      </div>
    )
  }
}

class Thing extends Component {
  render(){
    return(
      <div>
        {this.props.thing}
      </div>
    )
  }
}
