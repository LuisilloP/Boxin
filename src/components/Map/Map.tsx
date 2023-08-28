
import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import icon from "../../../public/marker-icon-2x.png";
import L from "leaflet";
import iconShadow from "../../../public/marker-shadow.png";


L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

const Map = () => {
  const position = [-30.6046874, -71.2020006, 21]
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