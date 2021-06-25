import React from 'react' 

const Summary = (props) => {
    return <div className="col-md-6 summary_window">
        <strong>Total: {props.summary[1]}  </strong> &nbsp; <strong>showing: {props.summary[0]}  </strong>
        
    </div>
}


export default Summary;