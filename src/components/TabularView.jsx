import React from 'react'


const TabularView = function (props) {

    const result = <table className="table tabular_view">
        <thead> <tr>
            <th>
                #
                </th>
            <th>
                Profile
                </th>
            <th>
                Type
                </th>

        </tr>
        </thead>
        <tbody>
            {
                props.data
            }
        </tbody>
    </table>;


    return result;
}



export default TabularView;