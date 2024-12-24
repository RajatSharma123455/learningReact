import './form.css'
import {useEffect, useState} from "react"
import intialcalculation from './data'
import { useContext } from 'react'
import calculationcontext from './calculationcontext'
import dispatchcontext from './dispatchcontext'
import { useRef } from 'react'


function Form({editing,setEditing,i}){
    const calculation=useContext(calculationcontext)
    const dispatch=useContext(dispatchcontext)
    const inputRef=useRef(0)

    const [item,setItem]=useState({id:calculation.length,add:"", mul:""});

    function handleSubmit(e){ 
        e.preventDefault();
        dispatch({type:"submit", payload:item})
       setItem({id:calculation.length,add:"", mul:""});

    }
    function editSubmit(e){
        console.log("Edit submit")  
        e.preventDefault();
        setItem(item);
         dispatch({type:'Edit', payload:item})
        // setCalculation([...calculation,item])
      
    //    setEditing(null);
    }
    function handleChange(e){
        setItem({...item,[e.target.name]:e.target.value}) // {sum:12,minus:23}

    }
    useEffect(()=>{
        if(editing){
    setItem(editing)
    }
    inputRef.current.focus()
},[editing])

    

    return(
   <form className='form'>
    <input  ref={inputRef} id='formbox1' name="add" placeholder="enter title" value={item.add} onChange={handleChange}></input>
    <input id='formbox2'  name="mul" placeholder="enter views" value={item.mul} onChange={handleChange}></input>
    <button onClick={editing?editSubmit:handleSubmit} > {editing?'Edit':'Add'}</button>
   </form>
    )

}
export default Form