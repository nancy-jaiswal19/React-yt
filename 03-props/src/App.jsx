import React from 'react'
import Card from "./components/Card";

const App = () => {
  return (
    
    <div className="parent">
      <Card 
      user = "Sunny"
      img = "https://images.unsplash.com/photo-1761669973922-3e4107cf1136?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
      /> 
      <Card 
      user = "Nancy"
      img = "https://plus.unsplash.com/premium_photo-1754767853559-1ad8f192f41e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=804"
      /> 
      <Card 
      user = "Sucy"
      img = "https://plus.unsplash.com/premium_photo-1761779542229-ee0d4bb8a82f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1086"
      /> 
      
    </div>
    

  )
}

export default App
