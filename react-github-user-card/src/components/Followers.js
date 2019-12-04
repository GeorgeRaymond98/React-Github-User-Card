import React from "react";
import axios from "axios";
import FollowersCard from "./FollowersCard"

class Followers extends React.Component {
    state= {
        followers: []
    }
    componentDidMount = () => {
        axios
        .get(`https://api.github.com/users/georgeraymond98/followers`)
        .then(response => {
            console.log("followers", response.data);
            this.setState({
                followers: response.data
            });
        })
        .catch(error => console.log(error));
    }
    render() {
        return (

            <div>
                {this.state.followers.map (follower => (
                     <FollowersCard key={follower.id}
                    //  followers={follower.followers_url}
                     img={follower.avatar_url} 
                     login = {follower.login}
                 />
                ))}
            </div>
        );
    }
}

export default Followers