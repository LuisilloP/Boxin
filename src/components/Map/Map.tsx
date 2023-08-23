
import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

type Props = {}

const Map = (props: Props) => {
  const position = [-30.6047078, -71.2018341]
  return (
    //@ts-ignore 
    <MapContainer className={"mapTest"} center={position} zoom={50} scrollWheelZoom={false} >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* 
// @ts-ignore */}
      <Marker position={position} >
        <Popup>
          Boxin club
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map