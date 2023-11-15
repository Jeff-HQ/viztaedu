import React from 'react';
import './Events.css'; 

const Events = () => {
  return (
    <div className='event-container'>
         <h2>Upcoming Events</h2>
         <div className='hr'></div>
    <div className='event-wrapper'>
       
     <div className='event-div'>
        <ul>
            <li>
                <div className='event-card'>
                    <div className='event-date'><i class="fa-regular fa-calendar"></i> 17th NOV</div>
                    <hr></hr>
                    <div className='event-details'></div>

                </div>
            </li>
            <li>
                <div className='event-card'>
                    <div className='event-date'><i class="fa-regular fa-calendar"></i> 11th NOV</div>
                    <hr></hr>
                    <div className='event-details'></div>

                </div>
            </li>
            <li>
                <div className='event-card'>
                    <div className='event-date'><i class="fa-regular fa-calendar"></i> 19th Oct</div>
                    <hr></hr>
                    <div className='event-details'></div>

                </div>
            </li>
            <li>
                <div className='event-card'>
                    <div className='event-date'><i class="fa-regular fa-calendar"></i> 17th Oct</div>
                    <hr></hr>
                    <div className='event-details'></div>

                </div>
            </li>
        </ul>
     </div>
    </div>
    </div>
  );
};

export default Events;
