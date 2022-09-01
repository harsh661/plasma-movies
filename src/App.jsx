import React from 'react'
import Card from './Card'
import {VscChromeClose} from 'react-icons/vsc'   //importing icon

export default function App() {
  const[search, setSearch] = React.useState('')  //search text
  const [trigger, settrigger] = React.useState(false);       //trigger event
  const [errorMsg, seterrorMsg] = React.useState('')    //error message

  function handleChange(event){
    setSearch(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    settrigger(prevtrigger => !prevtrigger)
    seterrorMsg("Oops, Movie not found!")
  }

  function clearAll() {
    setSearch("")
    settrigger(prevtrigger => !prevtrigger)
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
        <Card name={search} willShow={trigger} msg={errorMsg}/>
      </div>
    </>
  )
}

