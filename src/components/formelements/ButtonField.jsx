import React from 'react'



function ButtonField(props){
    //todo: anything in between 
    return <button {...props} onClick={props.callback}> {props.children} </button>;
}
export default ButtonField;