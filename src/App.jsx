import { useState } from 'react'
import './App.css'
import phrases from './utils/phrases.json'
import getRandomFromArr from './utils/getRandomFromArr'
import Phrase from './components/Phrase'
import Button from './components/Button'

const arr = [1, 2, 3, 4]

function App() {

  const initialPhrase = getRandomFromArr(phrases)
  const [quoteRandom, setQuoteRandom] = useState(initialPhrase)

  const numImg = Math.floor(Math.random() * 4) + 1;

  console.log(numImg)

  
  const objStyle = {
    backgroundImage : `url(../public/fondo${numImg}.jpg)`
  }

  return (
    <div className='app' style={objStyle}>
      <h1 className='app__tittle'>GALLETAS DE LA FORTUNA</h1>
      <div className='app__phrase__container'>
        <Phrase className='app__phrase' quoteRandom={quoteRandom} />
        <img className='app__rectangle' src="/rectangle1.svg" alt="" />
      </div>
      <Button setQuoteRandom={setQuoteRandom} />
    </div>
  )
  
}

export default App
