import React from 'react'
import ButtonField from './formelements/ButtonField';

 
const Pagination = function (props) {

    //get  the current page 
    const page = props.page;
    const per_page = props.per_page;
    const total_count = props.total_count;
    //todo: calculate the entire from the result count
    const total_pages = total_count/per_page;
    let items = []
    let next_items = 2;
    if (page < 3) {
        for (let i = page; i <= next_items + page; i++) {
            const item =    <li className="page-item">
            <ButtonField className="page-link docs-creator" href="#">{i}</ButtonField>
           </li>
            items.push(item);
        }
      
    }else   if (page > 2) {
        for (let i = page - next_items; i <= next_items + page; i++) {
         const item =    <li className="page-item">
            <ButtonField className="page-link docs-creator" href="#">{i}</ButtonField>
           </li>
            items.push(item);
        }
    }
   



    return (
        <ul className="pagination">
            <li className="page-item">
                <ButtonField className="page-link docs-creator" href="#"><i className="fa fa-backward"></i></ButtonField>
            </li>
            {
                items
            }
          
         
            <li className="page-item">
                <ButtonField className="page-link docs-creator" href="#"><i className="fa fa-forward"></i></ButtonField>
            </li>
        </ul>
    );
}


export default Pagination;
