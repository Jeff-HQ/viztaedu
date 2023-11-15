import './Newsletter.css'

const Newsletter=()=>{
return(
    <div className='Newsletter-div'>
        <div className='Newsletter-wrapper'>
        <div className='mail-desc'>    
         <div className='mail-input'>
            
         <h1>Subscribe to our weekly newsletter now!</h1>
         <p>Stay updated with the latest trends and exclusive content. Join our community and never miss out!</p>
       
            <input type='email' placeholder='email@gmail.com'></input>
            <button>Subscribe</button>
        </div>
         </div>
        </div>
    </div>
)
}
export default Newsletter;