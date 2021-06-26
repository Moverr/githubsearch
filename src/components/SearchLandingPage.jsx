import React, { Component } from 'react';
import SearchForm from './SearchForm';
import ProfileCard from './ProfileCard';

import '../css/main.css';
import Pagination from './Pagination';
import Summary from './Summary';
import Avatar from './utils/Avatar';
import DetailsView from './DetailsView';
import ButtonField from './formelements/ButtonField';
import TabularView from './TabularView';

class SearchLandingPage extends Component {


    constructor(props) {
        super(props);

        this.state = {
            displayview:"tabular"
            ,profiles: null
            , summary: null
            , profiledetail: {
                "login": "Moverr",
                "id": 8292044,
                "node_id": "MDQ6VXNlcjgyOTIwNDQ=",
                "avatar_url": "https://avatars.githubusercontent.com/u/8292044?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/Moverr",
                "html_url": "https://github.com/Moverr",
                "followers_url": "https://api.github.com/users/Moverr/followers",
                "following_url": "https://api.github.com/users/Moverr/following{/other_user}",
                "gists_url": "https://api.github.com/users/Moverr/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/Moverr/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Moverr/subscriptions",
                "organizations_url": "https://api.github.com/users/Moverr/orgs",
                "repos_url": "https://api.github.com/users/Moverr/repos",
                "events_url": "https://api.github.com/users/Moverr/events{/privacy}",
                "received_events_url": "https://api.github.com/users/Moverr/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Muyinda Rogers ",
                "company": null,
                "blog": "https://moverr.github.io/",
                "location": "Uganda, Kampala",
                "email": null,
                "hireable": true,
                "bio": "Interested in Functional Programming, Big Data and Artificial Intelligence.\r\n",
                "twitter_username": "MuyindaRogers4",
                "public_repos": 188,
                "public_gists": 3,
                "followers": 42,
                "following": 115,
                "created_at": "2014-07-28T17:50:59Z",
                "updated_at": "2021-06-25T09:17:14Z"
            }
        }
        this.profileCards = this.profileCards.bind(this);
        this.getProfileData = this.getProfileData.bind(this);
        this.getsummary = this.getsummary.bind(this);
        this.handleProfileDetail = this.handleProfileDetail.bind(this);
        this.profileTabular = this.profileTabular.bind(this);
        

        
    }

    //get data
    getProfileData() {

        return {
            "total_count": 427409,
            "incomplete_results": false,
            "items": [
                {
                    "login": "ju",
                    "id": 67181870,
                    "node_id": "MDQ6VXNlcjY3MTgxODcw",
                    "avatar_url": "https://avatars.githubusercontent.com/u/67181870?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/ju",
                    "html_url": "https://github.com/ju",
                    "followers_url": "https://api.github.com/users/ju/followers",
                    "following_url": "https://api.github.com/users/ju/following{/other_user}",
                    "gists_url": "https://api.github.com/users/ju/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/ju/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/ju/subscriptions",
                    "organizations_url": "https://api.github.com/users/ju/orgs",
                    "repos_url": "https://api.github.com/users/ju/repos",
                    "events_url": "https://api.github.com/users/ju/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/ju/received_events",
                    "type": "User",
                    "site_admin": false,
                    "score": 1.0
                },
                {
                    "login": "soasme",
                    "id": 369081,
                    "node_id": "MDQ6VXNlcjM2OTA4MQ==",
                    "avatar_url": "https://avatars.githubusercontent.com/u/369081?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/soasme",
                    "html_url": "https://github.com/soasme",
                    "followers_url": "https://api.github.com/users/soasme/followers",
                    "following_url": "https://api.github.com/users/soasme/following{/other_user}",
                    "gists_url": "https://api.github.com/users/soasme/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/soasme/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/soasme/subscriptions",
                    "organizations_url": "https://api.github.com/users/soasme/orgs",
                    "repos_url": "https://api.github.com/users/soasme/repos",
                    "events_url": "https://api.github.com/users/soasme/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/soasme/received_events",
                    "type": "User",
                    "site_admin": false,
                    "score": 1.0
                },
                {
                    "login": "huo-ju",
                    "id": 561810,
                    "node_id": "MDQ6VXNlcjU2MTgxMA==",
                    "avatar_url": "https://avatars.githubusercontent.com/u/561810?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/huo-ju",
                    "html_url": "https://github.com/huo-ju",
                    "followers_url": "https://api.github.com/users/huo-ju/followers",
                    "following_url": "https://api.github.com/users/huo-ju/following{/other_user}",
                    "gists_url": "https://api.github.com/users/huo-ju/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/huo-ju/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/huo-ju/subscriptions",
                    "organizations_url": "https://api.github.com/users/huo-ju/orgs",
                    "repos_url": "https://api.github.com/users/huo-ju/repos",
                    "events_url": "https://api.github.com/users/huo-ju/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/huo-ju/received_events",
                    "type": "User",
                    "site_admin": false,
                    "score": 1.0
                },
                {
                    "login": "Arkham",
                    "id": 62895,
                    "node_id": "MDQ6VXNlcjYyODk1",
                    "avatar_url": "https://avatars.githubusercontent.com/u/62895?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/Arkham",
                    "html_url": "https://github.com/Arkham",
                    "followers_url": "https://api.github.com/users/Arkham/followers",
                    "following_url": "https://api.github.com/users/Arkham/following{/other_user}",
                    "gists_url": "https://api.github.com/users/Arkham/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/Arkham/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/Arkham/subscriptions",
                    "organizations_url": "https://api.github.com/users/Arkham/orgs",
                    "repos_url": "https://api.github.com/users/Arkham/repos",
                    "events_url": "https://api.github.com/users/Arkham/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/Arkham/received_events",
                    "type": "User",
                    "site_admin": false,
                    "score": 1.0
                },
                {
                    "login": "0oneo",
                    "id": 1052534,
                    "node_id": "MDQ6VXNlcjEwNTI1MzQ=",
                    "avatar_url": "https://avatars.githubusercontent.com/u/1052534?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/0oneo",
                    "html_url": "https://github.com/0oneo",
                    "followers_url": "https://api.github.com/users/0oneo/followers",
                    "following_url": "https://api.github.com/users/0oneo/following{/other_user}",
                    "gists_url": "https://api.github.com/users/0oneo/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/0oneo/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/0oneo/subscriptions",
                    "organizations_url": "https://api.github.com/users/0oneo/orgs",
                    "repos_url": "https://api.github.com/users/0oneo/repos",
                    "events_url": "https://api.github.com/users/0oneo/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/0oneo/received_events",
                    "type": "User",
                    "site_admin": false,
                    "score": 1.0
                }
            ]
        };
    }

    getsummary() {
        const elems = this.getProfileData();
        const result = [elems.items.length, elems.total_count];
        return result;
    }
    handleProfileDetail(profileitem) {

    }
   
    profileTabular(props) {
        const elems = this.getProfileData();

        const profiles = elems.items;
       
        //depending
        const profileCards = profiles.map((profile_item) =>
      
					<tr key={profile_item.id}> 
						<td>
							 <Avatar image={profile_item.avatar_url} />
						</td>
						<td>
						{profile_item.login}
						</td>
						<td>
                        {profile_item.type}
						</td>
					 
					</tr>
				  
					 
				
        );
        const result  = <TabularView data={profileCards} />
     
        return result;
    }

    //populate  cards 
    profileCards(props) {
        const elems = this.getProfileData();

        const profiles = elems.items;
        //depending
        const profileCards = profiles.map((profile_item) => <ProfileCard callback={this.handleProfileDetail} key={profile_item.id} profile={profile_item} />);
        return profileCards;
    }

    render() {
        const summary = this.getsummary();
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                <span className="navbar-brand docs-creator" href="#"><i className="fa fa-github"></i></span>
                                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                    {/* //todo: Search Form  */}
                                    <SearchForm placeholder="Search" />

                                </div>
                            </nav>
                        </div>
                    </div>

                    <div className="row ">
                        {/* //summary represetnation  */}
                        <Summary summary={summary} />
                        <div className="col-md-6 tabular_window">
                            <ButtonField><i className="fa fa-bars"></i></ButtonField>
                            <ButtonField><i className="fa fa-id-card-o"></i></ButtonField>
                            
                        </div>
                    </div>
                    {/* main window  */}
                    <div className="row ">


                        <div className="col-md-8 main_window">
 {/* the other view model */}

                            {this.profileTabular()}
                        </div>

                        <div className="col-md-4">

                            <DetailsView className="col-md-4" profiledetail={this.state.profiledetail} />

                        </div>
                    </div>
                    <div className="row">
                        <Pagination />
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchLandingPage;