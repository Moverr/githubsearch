import React from 'react'
import ButtonField from './formelements/ButtonField';

 
const Pagination = function (props) {

    //get  the current page 
    const page = props.page;
    
 
    let items = []
    let next_items = 2;
    if (page < 3) {
        for (let i = page; i <= next_items + page; i++) {
            const item =    <li key={i} className="page-item">
            <ButtonField callback={(e)=>props.callback(e,i)} className="page-link docs-creator" href="#">{i}</ButtonField>
           </li>
            items.push(item);
        }
      
    }else   if (page > 2) {
        for (let i = page - next_items; i <= next_items + page; i++) {
         const item =    <li  key={i} className="page-item">
            <ButtonField  callback={(e)=>props.callback(e,i)} className="page-link docs-creator" href="#">{i}</ButtonField>
           </li>
            items.push(item);
        }
    }
   



    return (
        <ul className="pagination">
            <li  key='prev' className="page-item">
                <ButtonField  callback={(e)=>props.callback(e,'prev')} className="page-link docs-creator" href="#"><i className="fa fa-backward"></i></ButtonField>
            </li>
            {
                items
            }
          
         
            <li  key='next' className="page-item">
                <ButtonField   callback={(e)=>props.callback(e,'next')} className="page-link docs-creator" href="#"><i className="fa fa-forward"></i></ButtonField>
            </li>
        </ul>
    );
}


export default Pagination;
