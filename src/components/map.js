import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";

export default function MapEtsii() {
  const customIcon = new L.Icon({
    iconUrl: require("../images/marker.png"),
    iconRetinaUrl: require("../images/marker.png"),
    shadowAnchor: null,
    iconSize: new L.Point(20, 30),
  });

  return (
    <>
      <MapContainer
        center={[37.358342303352885, -5.986570537333228]}
        zoom={15}
        style={{ width: "80vw", height: "60vh", margin: "8vw" }}
      >
        <TileLayer
          url={
            "https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=4Qg1CBLvuefoRWUOrqlJ"
          }
          attribution={"https://api.maptiler.com/resources/logo.svg"}
        />
        <Marker icon={customIcon} position={[37.358342303352885, -5.986570537333228]} />
      </MapContainer>
    </>
  );
}
