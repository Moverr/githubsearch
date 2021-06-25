import React from 'react'
import ButtonField from './formelements/ButtonField';
import Avatar from './utils/Avatar';

const ProfileCard = function (props) {

    const profile = props.profile;
    console.log(props.profile);
    return <div className="profileCard">

        <div className="avatar">
            <Avatar  image={profile.avatar_url}  />           
        </div>
        <div className="username">
            {profile.login}
        </div>
        
        <ButtonField   className="btn btn-priimary "  > VIEW MORE</ButtonField>

    </div>
}
export default ProfileCard;
