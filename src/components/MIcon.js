import React from 'react';
import Button from '@mui/material/Button';

function MIcon(props) {
    let {name, text = '' } = props;
    return (
        //used JSX
        <Button style={{color: 'white'}} endIcon={name}>
            {text}
        </Button>
    )
}

export default MIcon;
