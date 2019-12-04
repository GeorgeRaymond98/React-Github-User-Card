import React from 'react';
import axios from "axios";
import MyCard from './MyCard';


class Myself extends React.Component { 
    state = {
        name: []
      }
      
    componentDidMount() {
        axios.get("https://api.github.com/users/GeorgeRaymond98")
        .then(response => {
            console.log("Myself", response.data);
            this.setState({
                name: response.data.name,
                bio: response.data.bio,
                location: response.data.location,
                img: response.data.avatar_url
            })
        })
        .catch(error => {
            console.log(error)
        })
    }
    render() {
        return (
            <div>
                <MyCard user={this.state.name} img={this.state.img} bio={this.state.bio} location={this.state.location}/>
            </div>
        )
    }
}

export default Myself
