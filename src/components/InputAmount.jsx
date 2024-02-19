import React from 'react';
import {Grid, InputAdornment, TextField} from '@mui/material'

const InputAmount = () => {
    return (
        <div>
            <Grid item>
                <TextField label="Amount" fullWidth InputProps={{
                    type:"number",
                    startAdornment: <InputAdornment>$</InputAdornment>
                }} />
            </Grid>
        </div>
    );
};

export default InputAmount;
