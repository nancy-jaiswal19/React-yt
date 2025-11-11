import React from 'react'

const App = () => {

  function btnClick(){
    console.log("btn is clicked")
  }

  function inputChange(val) {
    console.log(val);
    
  }

  function pageScrolling(elem) {
  
    
    if(elem > 0){
      console.log("seedha scroll");
      
    }else{
      console.log("ulta scroll");
      
    }
    
  }

  return (
    <div>
      <h1>Hello</h1>
      <button onClick = {()=>{
        console.log("Button Clicked")
      }}>Click me</button>

      <input onChange={function(elem){
        inputChange(elem.target.value)
      }}
      type="text" placeholder="Enter here" className="input"/>


     <div onMouseMove={(elem)=>{
      console.log(elem.clientX)
     }}
     className="box"
     ></div>

     <div onWheel={(elem)=>{
        pageScrolling(elem.deltaY)
     }}>
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
     </div>

    </div>
  )
}

export default App
