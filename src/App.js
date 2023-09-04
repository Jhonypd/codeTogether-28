import './App.css'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Container from './components/layout/Container'
import Form from './components/Form'
import Box from './components/layout/Box'
import SucessPage from './components/SuccessPage'
import Items from './components/Items'
import veiculos from './components/Carros'

function App() {

  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  return (
    <div className="App">
      <Router>
        <Container>
          <Routes>
            <Route path="/" element={<Box setIsFormSubmitted={setIsFormSubmitted} />} />
            <Route path="/success" element={<SucessPage />} />
            <Route path='/form' element={<Form />} />
            <Route path='/items' element={<Items carros={veiculos}/>} />
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
