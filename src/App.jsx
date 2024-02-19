import { useState } from 'react'
import './App.css'
import {Button, Container} from "@mui/material";

function App() {

  return (
    <Container maxWidth="md" sx={{background: "red"}}>
      <Button variant="contained">Click Me</Button>
    </Container>
  )
}

export default App
