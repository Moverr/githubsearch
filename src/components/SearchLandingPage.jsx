import React, { Component } from 'react';
import SearchForm from './SearchForm';
import ProfileCard from './ProfileCard';

import '../css/main.css';
import Pagination from './Pagination';

class SearchLandingPage extends Component {

    //todo: render elements 

    render() {
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


                    {/* main window  */}
                    <div className="row ">
                        <div className="col-md-8 main_window">

                            {/* //todo: profile card  */}
                            <ProfileCard />
                            <ProfileCard />
                            <ProfileCard />
                            <ProfileCard />
                            <ProfileCard />


                        </div>
                        <div className="col-md-4">
                            Detail
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