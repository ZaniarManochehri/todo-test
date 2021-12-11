import React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    button: {
        border: '4px solid',
        color: 'white',
        backgroundColor: 'black',
    }
}));

function MButton(props) {
    let { children } = props;
    return (
        <Button className={useStyles().button} variant="outlined" color="primary" startIcon={<SendIcon />}>
            اصنع ساندویچ خاص بک
        </Button>
    )
}

export default MButton;
