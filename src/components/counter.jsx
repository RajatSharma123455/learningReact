import {useState} from "react";

function Counter(){
    const [number,setNumber]=useState('||'); //using useState() hooks

function handleClick(){

    setNumber(number);
    setNumber(number=>number+1);
    console.log(number);
}
    return(
<>
<p>{number}</p>
<button onClick={handleClick}>Count</button>
</>

    )

}
export default Counter