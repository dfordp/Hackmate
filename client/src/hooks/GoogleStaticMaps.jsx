import React from 'react'
import { Link, redirect } from 'react-router-dom'

const GoogleStaticMaps = () => {
    const apiKey = ""
    const center = '40.714728,-73.998672'
    const zoom = '15'
    const size = '600x400'
    const maptype = 'default'

    const redirecttoGoogleMaps = () => {
        window.open(`https://www.google.com/maps/search/?api=1&query=${center}`, '_blank')
    }
    const staticMapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${center}&zoom=${zoom}&size=${size}&maptype=${maptype}&key=${apiKey}`

  return (
    <div>
      <img src={staticMapUrl} alt="map" onClick={redirecttoGoogleMaps} style={{cursor:'pointer'}} />
    </div>
  )
}

export default GoogleStaticMaps
