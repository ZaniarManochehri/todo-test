import React from 'react';

function HStack(props) {
    let { children, justifyContent, alignItems } = props;
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent,
            alignItems,
        }}>
            {children}
        </div>
    )
}

export default HStack;