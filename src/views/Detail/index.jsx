import React from 'react'
import { useEffect,useState } from 'react';
import { set } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import {format} from 'date-fns';
import { es } from 'date-fns/locale';
import styles from './Details.module.css';

const Detail = () => {
  const { eventId } = useParams();
  const [eventData, setEventData] = useState({});
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch event details using eventId
    console.log("Data fetched for event:" + eventId);
    const fetchEventData = async () => {
      try {
        console.log("Fetching event details for ID:", eventId);
        const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=enSY7Tyrr2tR3EvmACC69vqwynbN9SJd`);
        console.log("Response status:" + response.ok);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log("Data fetched for event:");
        console.log(data);
        setEventData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching event details:', error);
        setError(error);
        setLoading(false);
      }
    }
    fetchEventData();
  }, []);

  console.log(eventData);
  if (loading && Object.keys(eventData).length === 0) {
    return <div>Cargando Evento...</div>;
  }

  if (Object.keys(error).length > 0) {
    return <div>Ha ocurrido un error: {error.message}</div>;
  }

  return (
    <div  className={styles.container}>Detail of event {eventId}
      <div className={styles.mainInfoContainer}>
        <img src={eventData.images?.[0].url} alt={eventData.name} />
        <h4>{eventData.name}</h4>
        <p>{eventData.info}</p>
        {eventData.dates?.start.dateTime ? <p>{format(new Date(eventData.dates?.start?.dateTime), 'd LLLL yyyy H:mm',{locale:es})} horas</p> :null}     
      </div>
      <div className={styles.detail}>
        <h6>Mapa del Evento</h6>
        <img src={eventData.seatmap.staticUrl} alt="Mapa de asientos" />
        <p>{eventData.pleaseNote}</p>
        <p>Rango de Precios : {eventData.priceRanges?.[0]?.currency} {eventData.priceRanges?.[0]?.min} - {eventData.priceRanges?.[0]?.max}</p>
      </div>
      <a href={eventData.url} target="_blank" rel="noopener noreferrer">
        Ir por tus boletos
      </a>
    </div>

  )
}

export default Detail