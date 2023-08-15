import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "../ReactLeafletMap/leaflet.scss";
import "leaflet/dist/leaflet.css";

export default function LeafletMap({ cordinates ,name}) {
  
  if (cordinates) {
  
    return (
      
        <MapContainer center={cordinates}  zoom={15}>
          
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={cordinates}>
            <Popup>
              im live here <br /> 
              Im {name}
              my cord  lat{cordinates.lat}{cordinates.lng}
            </Popup>
          </Marker>
        </MapContainer>
      
    );
  }
    return
}
