import React from 'react'
import ButtonField from './formelements/ButtonField';

const Pagination = function (props) {
    return <nav>
        <ul className="pagination">
            <li className="page-item">
                <ButtonField className="page-link docs-creator" href="#"><i className="fa fa-backward"></i></ButtonField>
            </li>
            <li className="page-item">
                <ButtonField className="page-link docs-creator" href="#">1</ButtonField>
            </li>
            <li className="page-item">
                <button className="page-link docs-creator" href="#">2</button>
            </li>
            <li className="page-item">
                <ButtonField className="page-link docs-creator" href="#">3</ButtonField>
            </li>
            <li className="page-item">
                <ButtonField className="page-link docs-creator" href="#">4</ButtonField>
            </li>
            <li className="page-item">
                <ButtonField className="page-link docs-creator" href="#">5</ButtonField>
            </li>
            <li className="page-item">
                <ButtonField className="page-link docs-creator" href="#"><i className="fa fa-forward"></i></ButtonField>
            </li>
        </ul>
    </nav>;
}


export default Pagination;
