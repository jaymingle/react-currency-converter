import React from 'react';
import {Autocomplete, Grid, TextField} from "@mui/material";

const SelectCountry = () => {
    return (
            <Grid item xs={12} md={3}>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    value='Option1'
                    options={['Option 1', 'Option 2', 'Option 3']}
                    renderInput={(params) => (
                        <TextField {...params} label="From"/>
                    )} />
            </Grid>
    );
};

export default SelectCountry;
