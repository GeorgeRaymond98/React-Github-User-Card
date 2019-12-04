import React from "react"

const FollowersCard = ({img, login, followers_url}) => {
    return(
        <div className="followersCard">
            <img src={img} alt="user"/>
            {/* <h3> name:{followers}</h3> */}
            <h3> Login:{login}</h3>

        </div>
    )
}
export default FollowersCard;