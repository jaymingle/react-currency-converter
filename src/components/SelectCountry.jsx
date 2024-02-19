import React from 'react';
import {Autocomplete, Grid} from "@mui/material";

const SelectCountry = () => {
    return (
        <div>
            <Grid item>
                <Autocomplete xs={{}} value='Option1'  options={['Option 1', 'Option 2', 'Option 3']}/>
            </Grid>
        </div>
    );
};

export default SelectCountry;
