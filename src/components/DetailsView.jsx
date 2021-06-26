import React from 'react' ;
import Avatar from './utils/Avatar';

const DetailsView = function (props) {

    const profiledetail = props.profiledetail;
   console.log(props)
    return <div className="profileCard">
                <Avatar image={profiledetail.avatar_url} />
                       <span><strong>Name :</strong> {profiledetail.name} </span><br/>
                       <span><strong>Company :</strong> {profiledetail.company} </span><br/>

                       <span><strong>Email :</strong> {profiledetail.email} </span><br/>

                       <span><strong>bio :</strong> {profiledetail.bio} </span><br/>

                       <span><strong>followers :</strong> {profiledetail.followers} </span><br/>

                       <span><strong>following :</strong> {profiledetail.following} </span><br/>

                       <span><strong>public repos :</strong> {profiledetail.public_repos} </span><br/>

                       <span><strong>public gists : </strong>{profiledetail.public_gists} </span><br/>

    </div>
}
export default DetailsView;
