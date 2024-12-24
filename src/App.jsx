import Picture from './components/Picture'
import './components/Picture.css'
import calculationdb from './components/data'
import PlayButton from './components/playButton'
import {useReducer, useState} from "react"
import Form from './components/Form'

import { useContext } from 'react'
import "./App.css"
import dispatchcontext from './components/dispatchcontext'
import calculationcontext from './components/calculationcontext'
import axios from 'axios'
import { useEffect } from 'react'

function App(){
  const [editing,setEditing]=useState(null);
  const url="https://my.api.mockaroo.com/data.json?key=3caa91c0";


  function dataConvert(data){
   const  answer= data.data.split('\n');
   //console.log('type', answer)
   const result=[];
    for(let i=1;i<answer.length-1;i++){
     const lines=answer[i];
    const  newArr= lines.split(',');
   //console.log('type', newArr)
   result.push(newArr);
   
  }
  const showArr=[]
  result.map((value)=>{

  const obje={sum:value[0],minus:value[1],mul:value[2]};
  // console.log(obje);
 showArr.push(obje);
 
  })
  console.log(showArr);
  dispatch({type:'show', payload:showArr })
  

  //console.log('type', result)
  }

  async function showData() {
   try{
    const result= await axios.get(url)
   // console.log('answer', result.data)
    dataConvert(result);
    // const parseData=JSON.parse(result.data);
    // console.log('type', parseData)
   } catch(error){
    console.error('error:',error);
   }

  }
     useEffect(()=>{
       showData(); 
    
     },[])
 
  
  function calculationReducer(calculation,action) {
    //action is used to tell the type and payload to the dispatcher.
    switch(action.type){
      case'Delete': 
      return calculation.filter((_,i)=>i!==action.payload)

       case 'Edit': 
       const newPicture=[...calculation]
       newPicture.splice(editing.id,1,action.payload);
       setEditing(null);

       case'show': 
       return action.payload;
       
       
      
       
       case 'submit':
        return [...calculation,action.payload]
      default:
        return calculation;
    }
  }

  
  const [calculation,dispatch]=useReducer(calculationReducer,[])     //use of useReducer to make program efficient and compressed
                    // here dispatch is acts as a setter like setCalculation in useState.
 
    console.log('following result:',calculation);

  function deletePicture(index){ 
    dispatch({type:'Delete', payload:index })
  }
 
  
  function editPicture(index){
    console.log("editPicture")
    setEditing(calculation.find(value=>value.id===index))
  
  }

   
  return(
    <calculationcontext.Provider value={calculation}>
   <dispatchcontext.Provider value={dispatch}>
   
   <Form  editing={editing} setEditing={setEditing}/> 
   
    <div className='container'  style={{border:'1px solid black'}}>
    
    
    {

      calculation.map((item,i)=>{ 
        return(
          <div id="pic1" key={i}> 
          <Picture  {...item} deletePicture={deletePicture} editPicture={editPicture} i={i} />
           <div id='buttonstyle'>
          <PlayButton buttonName='Play' message='Hello' 

          onPlay={()=>console.log('playing..')} 
          onPause={()=>console.log('paused..')} />
             

          </div>
          </div>
         ) })
      }
   
    </div>
   </dispatchcontext.Provider>
   
    </calculationcontext.Provider>
  )
}
export default App