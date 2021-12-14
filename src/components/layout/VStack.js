import React from 'react';

function VStack(props) {
    let { children, justifyContent, alignItems } = props;
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent,
            alignItems,
        }}>
            {children}
        </div>
    )
}

export default VStack;