import React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { makeStyles } from '@mui/styles';
import { TEXT_4 } from '../assets/string';

const useStyles = makeStyles(theme => ({
    button: {
        border: '4px solid',
        color: 'white',
        backgroundColor: 'black',
    }
}));

function MButton(props) {
    return (
        <Button
            className={useStyles().button}
            variant="outlined"
            color="primary"
            startIcon={<SendIcon />}>
            {TEXT_4}
        </Button>
    )
}

export default MButton;
