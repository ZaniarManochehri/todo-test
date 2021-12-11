import React from 'react';

function ContentComponent(props) {
    let {children} = props;
    return (
        <div style={styles.container}>
            {children}
        </div>
    )
}

export default ContentComponent;

const styles = {
    container: {
        position: 'absolute',
            top: 100,
            right: 0,
            left: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
    }
}