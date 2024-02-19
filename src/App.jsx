import { useState } from 'react'
import './App.css'
import {Button, Container, Grid, Typography} from "@mui/material";
import InputAmount from "./components/InputAmount.jsx";
import SelectCountry from "./components/SelectCountry.jsx";
import SwitchCurrency from "./components/SwitchCurrency.jsx";

function App() {

  return (
    <Container maxWidth="md" sx={{background: "red"}}>
        <Typography variant="h5" sx={{marginTop: "2rem"}}> Get Accurate Conversions on the Go </Typography>
        <Grid container spacing={1} sx={{marginTop: "2px", marginLeft: "2px"}}>
            <InputAmount/>
            <SelectCountry/>
            <SwitchCurrency/>
            <SelectCountry/>
        </Grid>
    </Container>
  )
}

export default App
