import React, {useContext} from 'react';
import {Button, Grid} from "@mui/material";
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import {CurrencyContext} from "../context/CurrencyContext.jsx";

const SwitchCurrency = () => {

    const {
        fromCurrency,
        setFromCurrency,
        toCurrency,
        setToCurrency
    } = useContext(CurrencyContext)

    const switchCurrencyHandler = () => {
        setFromCurrrency(toCurrency)
        setToCurrrency(fromCurrency)
    }

    return (
            <Grid item xs={12} md={"auto"}>
                <Button sx={{
                    borderRadius: 1,
                    height: '100%',
                }} onClick={switchCurrencyHandler}>
                    <CompareArrowsIcon sx={{
                        fontSize: 30
                    }}/>
                </Button>
            </Grid>
    );
};

export default SwitchCurrency;
