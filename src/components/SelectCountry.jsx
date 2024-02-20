import React from 'react';
import {Autocomplete, Grid, Skeleton, TextField} from "@mui/material";
import useAxios from "../hooks/useAxios";

const SelectCountry = () => {

    const [data, loaded, error] = useAxios('https://restcountries.com/v3.1/all')

    if(loaded){
        return (
            <Grid item xs={12} md={3}>
                <Skeleton variant={"rounded"} height={60}/>
            </Grid>
            )
    }

    console.log(data)
    const dataFilter = data.filter(item => "currencies" in item)
    console.log(dataFilter)
    const dataCountry = dataFilter.map(country => `${country.flag} ${Object.keys(country.currencies)[0]} - ${country.name.common}`)
    console.log(dataCountry)
    return (
            <Grid item xs={12} md={3}>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    value='Option1'
                    options={dataCountry}
                    renderInput={(params) => (
                        <TextField {...params} label="From"/>
                    )} />
            </Grid>
    );
};

export default SelectCountry;
