import React from 'react'
import Card from './Card'
import {VscChromeClose} from 'react-icons/vsc'

export default function App() {
  const[search, setSearch] = React.useState('')
  const [num, setNum] = React.useState(1);
  const [errorMsg, seterrorMsg] = React.useState('')

  function handleChange(event){
    setSearch(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    setNum((prevNum) => prevNum + 1);
    setTimeout(() => {
      seterrorMsg("Oops, Movie not found!")
    }, 2000)
  }

  function clearAll(event) {
    setSearch("")
    setNum(prevNum => prevNum - 1)
    seterrorMsg("")
  }
  return (
    <>
      <nav className='navbar'>
        <form onSubmit={handleSubmit}>
          <div className='form--container'>
            <input 
            type="text"
            placeholder='Search Movies'
            name='search' 
            value={search}
            onChange={handleChange}
            className='input'
            />
            <i onClick={clearAll}><VscChromeClose id='close'/></i>
          </div>
          <button 
          className='search--btn'>Search
          </button>
          
        </form>
      </nav>
      <div className="container">
        <Card name={search} willShow={num} msg={errorMsg}/>
      </div>
    </>
  )
}

