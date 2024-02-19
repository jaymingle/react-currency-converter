import React from 'react';
import {Grid, TextField} from '@mui/material'

const InputAmount = () => {
    return (
        <div>
            <Grid item>
                <TextField label="Amount" fullWidth InputProps={{type:"number"}} />
            </Grid>
        </div>
    );
};

export default InputAmount;
