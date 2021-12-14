import React from 'react';
import '../../assets/style/index.css'

function CurveLayout(props) {
    let { children } = props;
    return (
        <div className="shape">
            {children}
        </div>
    )
}

export default CurveLayout;
