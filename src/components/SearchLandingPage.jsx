import React, { Component } from 'react';
import SearchForm from './SearchForm';

class SearchLandingPage extends Component {

    //search bar ui 
  
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
                                    <SearchForm placeholder="Search " age="232" />

                                </div>
                            </nav>
                        </div>
                    </div>
                    <div className="row">
                        Interesting Scenario
                   </div>
                </div>
            </div>
        );
    }
}

export default SearchLandingPage;