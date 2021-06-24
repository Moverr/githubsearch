import React from 'react'

const SearchForm = (props) => {
    return <form className="form-inline col-md-12 ">
        <div className="input-group">
        <input className="form-control col-md-9 " placeholder={props.placeholder} type="text" />
        <button className="btn btn-primary my-2 my-sm-0" type="submit">
            <i className="fa fa-search"></i>
        </button>
        </div>
    </form>
}


export default SearchForm;