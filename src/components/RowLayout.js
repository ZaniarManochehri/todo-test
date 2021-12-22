import React from 'react';
import '../assets/style/index.css'

function RowLayout(props) {
    let { children, marginTop = 0, marginBottom = 0 } = props;
    return (
        <div style={{marginTop, marginBottom}} className="row-layout">
            {children}
        </div>
    )
}

export default RowLayout;