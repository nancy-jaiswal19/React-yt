import React, {useState} from 'react'

const App = () => {

  const [obj, setObj] = useState({user:"Nancy",age:18})
  const [num, setNum] = useState([10,20,30])
  const [n, setN] = useState(10)

  const btnClicked = () =>{
    const newNum = { ...obj };
    newNum.user = "Jaiswal"
    newNum.age = 20
    setObj(newNum)

    setObj(prev=>({...prev,age:30}))   //another method to change 
  }

  const arr = ()=>{
    const newNum = [...num]
    newNum.push(99)

    setNum(newNum)
  }
//batch update
  const change = ()=>{
    setN(prev => (prev+1))
    setN(prev => (prev+1))
    setN(prev => (prev+1))
  }

  return (
    <div>
      <h1>{obj.user},{obj.age}</h1>
      <button onClick ={btnClicked} >click</button>

      <hr />
      <hr />
      <h1>{num}</h1>
      <button onClick={arr} >click</button>

      <hr />
      <hr />
      <h1>{n}</h1>
      <button onClick={change}>click</button>

    </div>
  )
}

export default App
