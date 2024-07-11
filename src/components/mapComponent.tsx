import React, { useEffect, useState } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { useParams } from "react-router-dom";

interface Location {
  lat: number;
  lng: number;
}

interface Place {
  id: string;
  name: string;
  location: Location;
}

interface PlaceDetail {
  address?: string;
  phoneNumbers?: string[];
  location?: Location;
}

const MapViewUpdater: React.FC<{
  center: L.LatLngExpression;
  zoom: number;
}> = ({ center, zoom }) => {
  const map = useMap();

  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);

  return null;
};

const MapComponent: React.FC = () => {
  const { schoolId } = useParams<{ schoolId?: string }>();

  const [places, setPlaces] = useState<Place[]>([]);
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [placeDetail, setPlaceDetail] = useState<PlaceDetail | null>(null);

  const defaultCenter: L.LatLngExpression = [48.4680221, 35.0417711];
  const defaultZoom = 12;

  const [mapCenter, setMapCenter] = useState<L.LatLngExpression>(defaultCenter);
  const [mapZoom, setMapZoom] = useState<number>(defaultZoom);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/schools");
        setPlaces(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (schoolId) {
      fetchSchoolDetailsAndUpdateMap();
    }
    fetchPlaces();
  }, []);

  const fetchSchoolDetailsAndUpdateMap = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/schools/${schoolId}`
      );
      const placeDetail = response.data;
      setPlaceDetail(placeDetail);

      if (placeDetail.location) {
        setMapCenter([placeDetail.location.lat, placeDetail.location.lng]);
        setMapZoom(22);
      }
    } catch (error) {
      console.error("Error fetching school details:", error);
    }
  };

  const handleMarkerClick = async (place: Place) => {
    setSelectedPlace(place);
    try {
      const response = await axios.get(
        `https://osvita-practice.azurewebsites.net/api/schools/${place.id}`
      );
      setPlaceDetail(response.data);

      if (response.data.location) {
        setMapCenter([response.data.location.lat, response.data.location.lng]);
        setMapZoom(15);
      }
    } catch (error) {
      console.error("Error fetching place details:", error);
    }
  };

  return (
    <div className="w-full h-full z-20 relative">
      <MapContainer
        center={mapCenter}
        zoom={mapZoom}
        style={{ width: "100%", height: "100%" }}
      >
        <MapViewUpdater center={mapCenter} zoom={mapZoom} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {places.map((place) => (
          <Marker
            key={place.id}
            position={[place.location.lat, place.location.lng]}
            eventHandlers={{
              click: () => handleMarkerClick(place),
            }}
          >
            <Popup>
              <div>
                <h2>{place.name}</h2>
                {placeDetail && selectedPlace?.id === place.id && (
                  <div>
                    {placeDetail.address && (
                      <p>
                        <strong>Address:</strong> {placeDetail.address}
                      </p>
                    )}
                    {placeDetail.phoneNumbers &&
                      placeDetail.phoneNumbers.length > 0 && (
                        <div>
                          <strong>Phone Numbers:</strong>
                          <ul>
                            {placeDetail.phoneNumbers.map((phone, index) => (
                              <li key={index}>{phone}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                  </div>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;