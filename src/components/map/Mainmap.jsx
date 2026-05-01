import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";

function LocationMarker({ position, setPosition, setValue }) {

  const map = useMapEvents({
    click(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng);
      if (setValue) {
          setValue("lat", e.latlng.lat);
          setValue("lng", e.latlng.lng); 
      }
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

const Mainmap = ({ register, location, setValue }) => {

  const [position, setPosition] = useState(null);

  const DEFAULT_POSITION = [13.7563, 100.5018];

  return (
    <div>

        { register && (
            <>
             <input hidden {...register("lat")} />
             <input hidden {...register("lng")} />
            </>
        ) }

      <p className="text-xs mt-3">Marker Position</p>

      <MapContainer
        className="h-[350px] z-0"
        center={location || DEFAULT_POSITION}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <LocationMarker
          position={position}
          setPosition={setPosition}
          setValue={setValue}
        />
      </MapContainer>
    </div>
  );
};

export default Mainmap;
