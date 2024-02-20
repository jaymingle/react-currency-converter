import {useContext, useState} from 'react'
import './App.css'
import {Button, Container, Grid, Typography} from "@mui/material";
import InputAmount from "./components/InputAmount.jsx";
import SelectCountry from "./components/SelectCountry.jsx";
import SwitchCurrency from "./components/SwitchCurrency.jsx";
import {CurrencyContext} from "./context/CurrencyContext";


function App() {

    const {
        fromCurrency,
        setFromCurrency,
        toCurrency,
        setToCurrency
    } = useContext(CurrencyContext);

    const BoxStyles ={
        background: "#fdfdfd",
        textAlign: "center",
        color: "#222",
        minHeight: "20rem",
        borderRadius: 2,
        padding: "4rem 2rem",
        boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
        position: "relative",
        marginTop: "10rem"
    }

  return (
    <Container maxWidth="md" sx={BoxStyles}>
        <Typography variant="h5" sx={{marginTop: "2rem", marginBottom: "2rem"}}> Get Accurate Conversions on the Go </Typography>
        <Grid container spacing={2}>
            <InputAmount/>
            <SelectCountry value={fromCurrency} setValue={setFromCurrency} label={"From"}/>
            <SwitchCurrency/>
            <SelectCountry value={toCurrency} setValue={setToCurrency} label={"To"}/>
        </Grid>
    </Container>
  )
}

export default App
