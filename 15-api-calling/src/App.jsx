import axios from 'axios'
import {useState} from 'react'

// // API calling
const App = () => {

  const [data, setData] = useState([])

//   async function getData() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     console.log(response);
    
//   }

// API calling using axios

  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list')

    setData(response.data);
    
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function(elem,idx){
          return <h3 key={idx}>{idx} {elem.author}</h3>
        })}
      </div>
    </div>
  )
}

export default App
