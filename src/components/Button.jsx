import getRandomFromArr from '../utils/getRandomFromArr'
import phrases from '../utils/phrases.json'

const Button = ( {setQuoteRandom} ) => {

  const handleChangePhrase = () => {
    setQuoteRandom(getRandomFromArr(phrases))
  }
  return (
    <button onClick={handleChangePhrase}>
      Ver otro
    </button>
  )
  
}

export default Button