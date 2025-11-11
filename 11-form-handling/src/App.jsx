import React from 'react'

const App = () => {

  const SumbitHandler = (e) =>{
    e.preventDefault()
    console.log("Form submit");
    
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        SumbitHandler(e)
      }}>
        <input type="text" placeholder="Enter your name" />
        <button>Sumbit</button>
      </form>
    </div>
  )
}

export default App
