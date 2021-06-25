import React from 'react'
import ButtonField from './formelements/ButtonField';
import InputField from './formelements/InputField';

const SearchForm = (props) => {
    return <form className="form-inline col-md-12 ">
        <div className="input-group col-md-9">
            <InputField className="form-control col-md-9 " placeholder={props.placeholder} type="text" />
            <ButtonField className="btn btn-primary my-2 my-sm-0" type="submit">
                <i className="fa fa-search"></i>
            </ButtonField>
        </div>
    </form>
}


export default SearchForm;