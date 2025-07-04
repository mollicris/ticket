import React, { use, useState } from 'react'
import EventItem from './components/EvenItem'

import { useNavigate } from 'react-router-dom';


//console.log(dataJson);
//const events = data._embedded.events;

//const { _embedded } = data
//console.log(_embedded);

//console.log(events);

const Events = ({ searchTerm,events }) => {

  
  const navigate = useNavigate();
  
  const handleEventClick = (id) => {
    console.log('Event item clicked:',id)
    navigate(`/detail/${id}`);
  } 

  const renderEvents = () => {
    let eventFiltered = events; 
    if (searchTerm.length > 0) {
      eventFiltered = eventFiltered.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    return eventFiltered.map((event) => (
        <EventItem 
            key={`event-item-${event.id}`} 
            name={event.name} 
            info = {event.info}
            image = {event.images[0].url}
            onEventClick={handleEventClick}    
            id={event.id}
        />
      ));
  };


  return (
    <>
      <div>Eventos</div>
      
      {renderEvents()}
    </>
  )
}

export default Events