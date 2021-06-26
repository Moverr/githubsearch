import React from 'react'
import ButtonField from './formelements/ButtonField';

const computelist = function (prop) {
    const page = 1;
    const total_pages = 100;
    let items = []
    let next_items = 2;
    if (page == 1) {
        for (let i = page; i <= next_items + page; i++) {
            items.push(<li>${i}</li>);
        }
        return items;
    }
    for (let i = page - next_items; i <= next_items + page; i++) {
        items.push(<li>${i}</li>);
    }

    return items;
}

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
                <ButtonField className="page-link docs-creator" href="#">2</ButtonField>
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
