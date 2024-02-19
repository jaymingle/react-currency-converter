import React from 'react';
import {Grid, InputAdornment, TextField} from '@mui/material'

const InputAmount = () => {
    return (
        <div>
            <Grid item xs={12}>
                <TextField label="Amount" fullWidth InputProps={{
                    type:"number",
                    startAdornment: <InputAdornment position={"start"}>$</InputAdornment>
                }} />
            </Grid>
        </div>
    );
};

export default InputAmount;
