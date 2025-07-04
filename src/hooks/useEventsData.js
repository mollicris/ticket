//import { useState } from 'react';
import { useEffect, useState } from 'react';
import eventsData from '../data/events.json'
//Hook para llamar a la API y guardar de manera local 
const useEventsData = (params) => {
   const [data,setData] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   const YOUR_API_KEY = "enSY7Tyrr2tR3EvmACC69vqwynbN9SJd"; // Replace with your actual API key
    // Simulate an API call

    const fetchEvents = async () => {
        try {
            const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=MX&apikey=${YOUR_API_KEY}${params?.length ? params : ''}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setData(data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    
    
      

   

    return {
        //events: data._embedded ? data._embedded.events : [],
        events :data?._embedded?.events || [],
        page :data.page || {},
        loading,
        error,
        fetchEvents
    }

    //const [data] = useState(eventsData); 
   /* const data = useRef(eventsData); 
    const { _embedded: { events } } = data.current; 
    return {
        events
    }
    */
};
export default useEventsData;