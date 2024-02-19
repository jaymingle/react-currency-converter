import { useState } from 'react'
import './App.css'
import {Button, Container, Grid, Typography} from "@mui/material";
import InputAmount from "./components/InputAmount.jsx";
import SelectCountry from "./components/SelectCountry.jsx";
import SwitchCurrency from "./components/SwitchCurrency.jsx";

function App() {

  return (
    <Container maxWidth="md"
               sx={{
                   background: "#fdfdfd",
    }}>
        <Typography variant="h5" sx={{marginTop: "2rem", marginBottom: "2rem"}}> Get Accurate Conversions on the Go </Typography>
        <Grid container spacing={2} sx={{marginTop: "2px", marginLeft: "2px"}}>
            <InputAmount/>
            <SelectCountry/>
            <SwitchCurrency/>
            <SelectCountry/>
        </Grid>
    </Container>
  )
}

export default App
