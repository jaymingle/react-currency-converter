import React from 'react';
import {Autocomplete, Grid, TextField} from "@mui/material";

const SelectCountry = () => {
    return (
        <div>
            <Grid item xs={{}}>
                <Autocomplete
                    value='Option1'
                    options={['Option 1', 'Option 2', 'Option 3']}
                    renderInput{params => <TextField {...params} label="From"}/>}
                />
            </Grid>
        </div>
    );
};

export default SelectCountry;
