import React from 'react';
import '../assets/style/index.css'

function ColLayout(props) {
    let { children, marginTop = 0, marginBottom = 0 } = props;
    return (
        <div style={{marginTop, marginBottom}} className="col-layout">
            {children}
        </div>
    )
}

export default ColLayout;