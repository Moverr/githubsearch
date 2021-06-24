import React, { Component } from 'react';

class SearchLandingPage extends Component {

    //search bar ui 
    searchbar  =   (props) => {
        return  <form className="form-inline col-md-12 ">
        <input className="form-control col-md-9 " type="text" />
        <button className="btn btn-primary my-2 my-sm-0" type="submit">
             <i className="fa fa-search"></i>
        </button>
    </form>
    }

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                                {/* <!-- Add Github icon --> */}
                                <a className="navbar-brand docs-creator" href="#"><i className="fa fa-github"></i></a>
                                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                   <this.searchbar/>

                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchLandingPage;