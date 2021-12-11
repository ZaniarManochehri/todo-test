import React from 'react';
import Button from '@mui/material/Button';

function MIcon(props) {
    let {name, color = 'white', top = 'auto', right = 'auto', left = 'auto', bottom = 'auto', text = '' } = props;
    return (
        //used JSX
        <Button style={{
            position: 'absolute',
            top,
            left,
            right,
            bottom,
            color,
        }} endIcon={name}>
            {text}
        </Button>
    )
}

export default MIcon;
