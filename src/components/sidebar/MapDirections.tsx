import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";
import L from "leaflet";

const venueCoordinates: LatLngExpression = [14.599226842393813, 121.31569421469574];
const venueAddress = "KM 45, Garden Cottages, Marikina-Infanta Hwy, Baras, 1970 Rizal";

// Custom icon
const weddingCoupleIcon = new L.Icon({
  iconUrl: "/img/wedding-couple.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

export function MapDirections() {
  return (
    <MapContainer center={venueCoordinates} zoom={15} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        attribution='&copy; <a href="https://www.esri.com/en-us/arcgis/products/arcgis-online/overview">Esri</a> contributors'
      />
      <Marker position={venueCoordinates} icon={weddingCoupleIcon}>
        <Popup>
          <strong>Wedding Venue</strong>
          <br />
          {venueAddress}
        </Popup>
      </Marker>
    </MapContainer>
  );
}
