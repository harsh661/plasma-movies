import React from 'react'
import Card from './Card'

export default function App() {
  const[search, setSearch] = React.useState('')
  const [num, setNum] = React.useState(1);


  function handleChange(event){
    setSearch(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    setNum((prevNum) => prevNum + 1);
  }

  return (
    <>
      <nav className='navbar'>
        <form onSubmit={handleSubmit}>
          <input 
          type="text"
          placeholder='Search Movies'
          name='search' 
          value={search}
          onChange={handleChange}
          className='input'
          />
          
          <button 
          className='search--btn'>Search
          </button>
          
        </form>
      </nav>
      <div className="container">
        <Card name={search} handleSubmit={handleSubmit} willShow={num}/>
      </div>
    </>
  )
}

