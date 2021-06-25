import React from 'react'
import ButtonField from './formelements/ButtonField';

const ProfileCard = function (props) {

    const profile = props.profile;
    console.log(props.profile);
    return <div className="profileCard">

        <div className="avatar">
            <img src={profile.avatar_url} />
        </div>
        <div className="username">
            {profile.login}
        </div>
        <div className="followers">1233</div>
        <ButtonField > VIEW MORE</ButtonField>

    </div>
}
export default ProfileCard;
