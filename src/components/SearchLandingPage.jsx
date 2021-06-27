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

import axios from 'axios';


class SearchLandingPage extends Component {



    constructor(props) {
        super(props);

        this.state = {
            loader: false,
            loader_text: "",
            page: 1,
            per_page: 50,
            searchQuery: "",
            displayview: "date"
            , profiles: []
            , summary: [0, 0]
            , profiledetail: null
        }
        this.profileCards = this.profileCards.bind(this);
        this.getProfileData = this.getProfileData.bind(this);

        this.handleProfileDetail = this.handleProfileDetail.bind(this);
        this.profileTabular = this.profileTabular.bind(this);
        this.getdisplayview = this.getdisplayview.bind(this);
        this.handleSearchQuery = this.handleSearchQuery.bind(this);
        this.handlerSubmitButton = this.handlerSubmitButton.bind(this);
        this.handlePagination = this.handlePagination.bind(this);

    }

    handleSearchQuery(e) {
        e.preventDefault();
        this.setState({ searchQuery: e.target.value, page: 1 });
    }

    handlerSubmitButton(e) {
        e.preventDefault();
        this.fetchData();
    }


    fetchData = async () => {

        const query = this.state.searchQuery;
        const page = this.state.page;

        const per_page = this.state.per_page;
        const url = 'https://api.github.com/search/users?q="' + query + '"&page=' + page + '&per_page=' + per_page;
        this.setState({
            loader: true, loader_text: "Proccessing request ..."
        });
        let promise = axios.get(`${url}`, {

            headers: {
                'Accept': 'application/vnd.github.v3+json'
                //,
                // 'Authorization': 'token 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'
            }
        });

        promise.then((response) => {

            const total_count = response.data.total_count

            const per_page = this.state.per_page;
            const page = this.state.page;
            const result_count = page * per_page;
            //response.data.items.length;
            const summary = [result_count, total_count];

            this.setState(
                { profiles: response.data, summary: summary,loader: false }
            );

        })
    }
    componentDidMount() {

        this.fetchData();
    }


    getProfileData() {
        return this.state.profiles;
    }



    handleProfileDetail(e, item) {
        e.preventDefault();

        if (item.detail !== undefined) {
            this.setState(
                { profiledetail: item.detail }
            );
            return;
        }

        this.setState({
            loader: true, loader_text: "Proccessing Profile detail ..."
        });

       
        const url = item.url;
        let promise = axios.get(`${url}`, {

            headers: {
                'Accept': 'application/vnd.github.v3+json'
                // ,
                // 'Authorization': 'token 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'
            }
        });

        promise.then((response) => {



            this.setState(
                { profiledetail: response.data ,loader: false}
            );
        })

        console.log(item);
    }

    // populate tabular data
    profileTabular(props) {
        const elems = this.getProfileData();
        const profiles = elems.items;
        if (elems === undefined || profiles === undefined) return false;


        const profileCards = profiles.map((profile_item) =>
            <tr key={profile_item.id} onClick={(e) => { this.handleProfileDetail(e, profile_item) }}>
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

        if (elems === undefined || profiles === undefined) return false;


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

    handlePagination(e, pageOption) {
        e.preventDefault();
        let page = this.state.page;

        if (typeof pageOption === 'number') {

            this.setState({ page: pageOption });
        } else {
            if (pageOption === 'next') {
                page = page + 1;
            } else if (pageOption === 'prev') {
                page = page > 1 ? page - 1 : page;
            }
            else {
                return null;
            }
            this.setState({ page: page });
        }
        this.fetchData();

    }

    render() {
        const summary = this.state.summary

        return (
            <div>

                <div className="container-fluid">

                    <div className="row">
                        <div className="col-md-12">
                            {/* col-md-6  */}
                            <div className={
                                this.state.loader ? 'col-md-6  loader-on' : 'loader-off'
                            }>
                                {this.state.loader_text}
                            </div>
                            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                <span className="navbar-brand docs-creator" href="#"><i className="fa fa-github"></i></span>
                                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                    {/* //todo: Search Form  */}
                                    <SearchForm handlesearchbutton={()=>this.handlerSubmitButton} handlersearchquery={()=>this.handleSearchQuery} placeholder="Search" />

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
                        <Pagination callback={this.handlePagination} total_count={this.state.summary[1]} per_page={this.state.per_page} page={this.state.page} />
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchLandingPage;