import {useContext, useState, useEffect} from 'react'
import './App.css'
import {Button, Container, Grid, Typography} from "@mui/material";
import InputAmount from "./components/InputAmount.jsx";
import SelectCountry from "./components/SelectCountry.jsx";
import SwitchCurrency from "./components/SwitchCurrency.jsx";
import {CurrencyContext} from "./context/CurrencyContext";
import axios from "axios";


function App() {

    const API_KEY = "fca_live_vFm6HjmSBa94OwnTSjam8djhUzHDkpIiqWGJtXiC"

    const {
        fromCurrency,
        setFromCurrency,
        toCurrency,
        setToCurrency,
        firstAmount,
        setFirstAmount,
    } = useContext(CurrencyContext);

    const [resultCurrency, setResultCurrency] = useState(0)

    useEffect(() => {

        if(firstAmount){
            axios("https://api.freecurrencyapi.com/v1/latest", {
                params: {
                    API_KEY,
                    base_currrency: "USD",
                    currencies: "IDR"
                }
            })
                .then(response => setResultCurrency(response.data))
                .catch(error => console.log(error))
        }

    }, [firstAmount]);
    

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
