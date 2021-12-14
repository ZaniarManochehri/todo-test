import React from 'react';
import {styles} from '../../assets/style';

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