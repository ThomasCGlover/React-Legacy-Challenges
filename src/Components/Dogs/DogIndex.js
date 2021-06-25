import React, {Component} from 'react';

export default class DogImage extends Component{
    constructor(props){
        super(props);
        this.state = {
            image: ''
        }
    }

    componentDidMount(){
        fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) => response.json())
        .then(json => {
            this.setState({image: json.message})
        })
        .catch((error) => console.log(error))
    }

    fetchNewDog = () => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) => response.json())
        .then(json => {
            this.setState({image: json.message})
        })
        .catch((error) => console.log(error))
    }


    render(){
        return(
            <div>
                <img src={this.state.image} alt="dog"></img>
                <button onClick={this.fetchNewDog}>Click for new dog!</button>
            </div>
        )
    }

}