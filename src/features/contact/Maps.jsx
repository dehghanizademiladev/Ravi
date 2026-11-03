import React from 'react'
import { MapContainer, TileLayer,Popup,Marker } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
function Maps() {
    const position = [31.583961911056434, 54.44609556521321]

  return (
    <div className=' rounded-2xl'>
        <MapContainer center={position} zoom={15} scrollWheelZoom={true} className='w-full h-100 rounded-xl'>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup className='font-peyda font-bold w-34'>
         کتابفروشی راوی
      </Popup>
    </Marker>
  </MapContainer>
    </div>
  )
}

export default Maps