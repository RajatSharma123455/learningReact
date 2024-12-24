import {useState} from "react"
import '../components/playButton.css'




function PlayButton({buttonName,children,onPlay,onPause}){
   const [status,setStatus]=useState(false);
 
function handleClick(){
    
   if(status)
    onPlay();
    else
   onPause();
   
   setStatus(!status);   //where modification is needed, modify it by using the setter(setStatus)
}
    return(
   <>

    <button  onClick={handleClick}>  {buttonName} {children}:{status?'||' : '&'}</button>
    
    
     </>
    )
}
export default PlayButton