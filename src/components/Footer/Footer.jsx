import './Footer.css'

const Footer=()=>{
return(
    <div className='Footer-div'>
        <div className='Footer-wrapper'>
         <div className='Footer-img'>
            <img src='./Images/viztaedu-logo-grey.png'></img>
            <div className='location'><p>Location: Pokuase, Greater Accra, Ghana</p>
         <p>Phone: +233 27 915 7847</p> 
        <p>Email: admin@viztaedu.com</p>
          </div></div>
         
         <div className='socials'>
            <ul>
                <li><i class="fa-brands fa-youtube"></i></li>
                <li><i class="fa-brands fa-linkedin-in"></i></li>
                <li><i class="fa-brands fa-instagram"></i></li>
                <li><i class="fa-brands fa-facebook-f"></i></li>
                <li><i class="fa-brands fa-x-twitter"></i></li>
                
            </ul>
            <div className='sc-flex'>
            <ul>
                <li>privacy policy</li>
                <li>About Us</li>
                <li>Contact us</li>
                <li>Terms</li>
                <li>Frequently Asked Questions</li>

                
            </ul>
         </div>
         </div>
         
        </div>
        <div className='copyright'>Copyright © 2023 ViztaEdu</div>
    </div>
)
}
export default Footer;