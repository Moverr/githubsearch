import React, { Component, useEffect  } from 'react';
import SearchForm from './SearchForm';
import ProfileCard from './ProfileCard';

import '../css/main.css';
import Pagination from './Pagination';
import Summary from './Summary';
import Avatar from './utils/Avatar';
import DetailsView from './DetailsView';
import ButtonField from './formelements/ButtonField';
import TabularView from './TabularView';

import axios from 'axios';
 

class SearchLandingPage extends Component {



    constructor(props) {
        super(props);

        this.state = {
            page:1 ,
            per_page:50,
            searchQuery:"",
            displayview: "date"
            , profiles: []
            , summary: [0,0]
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
        
        this.handleProfileDetail = this.handleProfileDetail.bind(this);
        this.profileTabular = this.profileTabular.bind(this);
        this.getdisplayview = this.getdisplayview.bind(this);
        this.handleSearchQuery = this.handleSearchQuery.bind(this);
        this.handlerSubmitButton = this.handlerSubmitButton.bind(this);

    }

    handleSearchQuery(e){
        e.preventDefault();
        this.setState({searchQuery:e.target.value});
    }
    
    handlerSubmitButton(e){
        e.preventDefault();
        this.fetchData();
    }
    

     fetchData = async () =>{      

        const query = this.state.searchQuery;
        const page = this.state.page;
        const per_page = this.state.per_page;
        const url  = 'https://api.github.com/search/users?q="'+query+'"&page='+page+'&per_page='+per_page;
        let promise =    axios.get(`${url}`,{
           
            headers:{
                'Accept': 'application/vnd.github.v3+json',
                'Authorization': 'token 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'
            }
        });
  
        promise.then((response)=>{
            
            const total_count = response.data.total_count
            const result_count = response.data.items.length;
            const summary = [result_count,total_count];

             this.setState(
                 {profiles:response.data,summary:summary}             
                 );
        })
    }
    componentDidMount(){    
           
        this.fetchData();  
    }

 
    getProfileData() { 
        return this.state.profiles; 
    }

  
    handleProfileDetail(e) {
        e.preventDefault();
        alert("pass me");
    }

    // populate tabular data
    profileTabular(props) {
        const elems = this.getProfileData();
        const profiles = elems.items; 
        if(elems == undefined || profiles == undefined ) return false;

     
        const profileCards = profiles.map((profile_item) =>
            <tr key={profile_item.id}>
                <td>
                    <Avatar image={profile_item.avatar_url} />
                </td>
                <td>
                    {profile_item.login}
                </td>
                <td>
                    {profile_item.html_url}
                </td>

            </tr> 
        );
        const result = <TabularView data={profileCards} />
        return result;
    }

    // populate cards 
    profileCards(props) {
        const elems = this.getProfileData();
        const profiles = elems.items;
       
        if(elems == undefined || profiles == undefined ) return false;


        //depending
        const profileCards = profiles.map((profile_item) => <ProfileCard callback={this.handleProfileDetail} key={profile_item.id} profile={profile_item} />);
        return profileCards;
    }

    //decide which view to showcase 
    getdisplayview() {
        const displayview = this.state.displayview;
        switch (displayview) {
            case "tabular":
                return this.profileTabular();


            default:
                return this.profileCards();

        }
    }




    render() {
        const summary = this.state.summary

        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                <span className="navbar-brand docs-creator" href="#"><i className="fa fa-github"></i></span>
                                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                    {/* //todo: Search Form  */}
                                    <SearchForm handlesearchbutton={this.handlerSubmitButton} handlersearchquery={this.handleSearchQuery} placeholder="Search" />

                                </div>
                            </nav>
                        </div>
                    </div>

                    <div className="row ">
                        {/* //summary represetnation  */}
                        <Summary summary={summary} />
                        <div className="col-md-6 tabular_window">
                            <ButtonField callback={() => { this.setState({ displayview: "tabular" }) }}><i className="fa fa-bars"></i></ButtonField>
                            <ButtonField callback={() => { this.setState({ displayview: "cards" }) }}><i className="fa fa-id-card-o"></i></ButtonField>

                        </div>
                    </div>
                    {/* main window  */}
                    <div className="row ">


                        <div className="col-md-8 main_window">
                            {this.getdisplayview()}
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