import React from 'react'

const App = () => {
  localStorage.setItem("user","nancy")
  const user = localStorage.getItem("user")
  console.log(user);

  localStorage.removeItem("user")

  const name = {
    user: "nancy",
    age: 18,
    city: "basti"
  }

  localStorage.setItem("user",JSON.stringify(name))
  const usera = JSON.parse(localStorage.getItem('user'))
  
  console.log(usera);
  
  return (
    <div>
      
    </div>
  )
}

export default App
