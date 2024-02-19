import { useState } from 'react'
import './App.css'
import {Button, Container, Grid, Typography} from "@mui/material";
import InputAmount from "./components/InputAmount.jsx";

function App() {

  return (
    <Container maxWidth="md" sx={{background: "#fdfdfd"}}>
        <Typography variant="h5" sx={{marginTop: "2rem"}}> Get Accurate Conversions on the Go </Typography>
        <Grid container spacing={3}>
            <InputAmount/>
            <Grid item>Item 2</Grid>
            <Grid item>Item 3</Grid>
            <Grid item>Item 4</Grid>
        </Grid>
    </Container>
  )
}

export default App
