import React from 'react';
import {styles} from '../loader';

function ContentComponent(props) {
    let {children} = props;
    let {contentComponent} = styles;
    return (
        <div style={contentComponent.container}>
            {children}
        </div>
    )
}

export default ContentComponent;