import React, { Component } from 'react';
import SearchForm from './SearchForm';
import ProfileCard from './ProfileCard';

import '../css/main.css';

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
            <nav>
				<ul className="pagination">
					<li className="page-item">
						<a className="page-link docs-creator" href="#"><i className="fa fa-backward"></i></a>
					</li>
					<li className="page-item">
						<a class="page-link docs-creator" href="#">1</a>
					</li>
					<li className="page-item">
						<a className="page-link docs-creator" href="#">2</a>
					</li>
					<li className="page-item">
						<a className="page-link docs-creator" href="#">3</a>
					</li>
					<li className="page-item">
						<a className="page-link docs-creator" href="#">4</a>
					</li>
					<li className="page-item">
						<a className="page-link docs-creator" href="#">5</a>
					</li>
					<li className="page-item">
						<a className="page-link docs-creator" href="#"><i className="fa fa-forward"></i></a>
					</li>
				</ul>
			</nav>
            </div>
                </div>
            </div>
        );
    }
}

export default SearchLandingPage;