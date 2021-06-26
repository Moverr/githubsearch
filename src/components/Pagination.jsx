import React from 'react'
import ButtonField from './formelements/ButtonField';

 
const Pagination = function (props) {

    const page = 10;
    const total_pages = 100;
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
