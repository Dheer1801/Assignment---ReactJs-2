import React,{useState} from "react"
import "./style.css"

let App = ()=>{

    let[score,setScore] = useState(0) 
    return(
        <div>
            <h1>Dheer Patel</h1>
             <h3>The Value of Score is : {score}</h3>
             <button className="button" onClick={()=>(score<25)?setScore(score+1) : ""}>Increment</button>
             <button className="button" onClick={()=>(score>0)?setScore(score-1) : ""}>Decrement</button>
             <button className="button" onClick={()=>{setScore(0)}}>Reset</button>
        </div>
    )
   
}
export default App