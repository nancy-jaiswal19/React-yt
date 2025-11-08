import Navbar from "./Navbar";
import Page1 from "./Page1Content";

const Section1 = (props) => {
  return (
    <div className="h-screen w-full">
      <Navbar/>
      <Page1  user={props.user}/>
    </div>
  )
}

export default Section1
