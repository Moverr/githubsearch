import React from 'react'
import ButtonField from './formelements/ButtonField';
import InputField from './formelements/InputField';

const SearchForm = (props) => {
    return <form className="form-inline col-md-12 ">
        <div className="input-group col-md-9">
            <InputField callback={props.handlersearchquery} className="form-control col-md-9 " placeholder={props.placeholder} type="text" />
            <ButtonField  callback={props.handlesearchbutton}  className="btn btn-priimary " type="submit">
                <i className="fa fa-search"></i>
            </ButtonField>
        </div>
    </form>
}


export default SearchForm;