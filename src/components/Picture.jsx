
import Apple from '../assets/apple.jpg'
import './Picture.css'


function Picture({sum,minus,mul,deletePicture,i, editPicture}){
     
  
    return(
        
        <div>
        <button onClick={()=>deletePicture(i)} className='deletebutton' style={{ position:'absolute'}}>X</button>
        <button onClick={()=>editPicture(i)} className='editbutton' >Edit</button>
            <img src={Apple} style={{height:'180px', width:'350px'}}></img>
            <div >Sum {sum}</div>
            <div>subtract {minus}</div>
            <div>multiply {mul}</div>

        
        </div>
    
    )
}
export default Picture