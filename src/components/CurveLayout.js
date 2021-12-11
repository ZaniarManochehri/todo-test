import React from 'react';

function CurveLayout(props) {
    let {children} = props;
    return (
        <div className="container1">
            <div className="round-bottom"></div>
            {children}
        </div>
    )
}

export default CurveLayout;
