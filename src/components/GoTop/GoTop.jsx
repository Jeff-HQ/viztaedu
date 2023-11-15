import './GoTop.css'
import { useState,useEffect } from 'react';


const GoTop=()=>{
    const [ showGoTop, setShowGoTop ] = useState( false )

    const handleVisibleButton = () => {
        setShowGoTop( window.pageYOffset > 50 )
    }
    
    const handleScrollUp = () => {
        window.scrollTo( { left: 0, top: 0, behavior: 'smooth' } )
    }
    
    useEffect( () => {
        window.addEventListener( 'scroll', handleVisibleButton )
    }, [] )
    
    return (
        <div className={ showGoTop ? '' : 'goTopHidden' } onClick={ handleScrollUp }>
            
            
                <span className='goTop'>
                <i class="fa-solid fa-arrow-up fa-xl"></i>
                </span>
           
        </div>
    )
}
export default GoTop;