import React from 'react'
import  styles from './EventItem.module.css'
import { Link } from 'react-router-dom'

const EventItem = (
  {name, info, image, onEventClick,id} // Destructuring props
) => {
  return (
    <div className={`${styles.eventItemContainer} ${styles.eventItemContainerHover}`}>
      <img src={image} alt={name} width={200} height={200}/>
      <div className={styles.eventInfoContainer}>
        <h2 className={styles.eventName}>{name}</h2>
      <p className={styles.eventInfo}> {info}</p>
      <button className={styles.seeMoreButton}
        onClick={(evt) => {
          onEventClick(id)
          evt.stopPropagation()
        }}
      >
      {/*  <Link to={`/detail/${id}`}>
          Ver mas
        </Link>
      */}
      </button>

      </div>
    </div>
  )
}

export default EventItem