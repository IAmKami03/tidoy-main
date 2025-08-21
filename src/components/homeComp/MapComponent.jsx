import React, { useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

import bed from "../../assets/Images/bed.png";
import bath from "../../assets/Images/bath.png";
import size from "../../assets/Images/size-house.png";
import halfStar from "../../assets/Images/V (1).png";
import heart from "../../assets/Images/heart.png";
import arrleft from "../../assets/Images/arrow_left.png";
import { Link, useNavigate } from "react-router-dom";
import { useHomeContext } from "../../contexts/HomeContext";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Helper component for flying to coordinates
const FlyToLocation = ({ coords }) => {
  const map = useMap();
  if (coords) {
    map.flyTo(coords, 15, { duration: 1.5 });
  }
  return null;
};

const MapComponent = ({ setScreen }) => {
  const navigate = useNavigate();
  const mapRef = useRef();
  const routingControlRef = useRef(null); // keep track of routes

  const { data: properties } = useHomeContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [flyCoords, setFlyCoords] = useState(null);

  // Get user’s location
  const [userLocation, setUserLocation] = useState(null);

  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        console.log("User location:", pos.coords); // debug
        setUserLocation([pos.coords.latitude, pos.coords.longitude]);
      });
    }
  }, []);

  // Function to create route
  const createRoute = (destination) => {
    if (!mapRef.current || !userLocation) return;

    // Remove old route if exists
    if (routingControlRef.current) {
      routingControlRef.current.remove();
    }

    // Add new route
    routingControlRef.current = L.Routing.control({
      waypoints: [
        L.latLng(userLocation[0], userLocation[1]),
        L.latLng(destination[0], destination[1]),
      ],
      lineOptions: { styles: [{ color: "blue", weight: 5 }] },
      addWaypoints: false,
      routeWhileDragging: false,
      draggableWaypoints: false,
      fitSelectedRoutes: true,
      createMarker: () => null, // no duplicate markers
      router: new L.Routing.OSRMv1({
        serviceUrl: "https://router.project-osrm.org/route/v1",
      }),
    }).addTo(mapRef.current);

    console.log("Creating route from", userLocation, "to", destination);
  };

  const listings = properties.map((item) => ({
    id: item._id,
    title: item.title,
    area: item.area || "",
    city: item.city || "",
    coords: [item.location.coordinates[1], item.location.coordinates[0]],
    image: item.images?.[0] || "",
    rating: item.score || 0,
    review: item.reviewCount || 0,
    price: item.pricePerNight || 0,
    beds: item.rooms || 0,
    baths: item.bathrooms || 0,
    sizes: item.size || "N/A",
  }));

  const filteredListings = listings.filter((listing) =>
    `${listing.title} ${listing.area} ${listing.city}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  console.log("Routing control available?", L.Routing);

  return (
    <div className="relative h-screen w-full">
      {listings.length > 0 && (
        <MapContainer
          center={listings[0].coords}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
          whenCreated={(mapInstance) => (mapRef.current = mapInstance)}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {filteredListings.map((listing) => (
            <Marker key={listing.id} position={listing.coords}>
              <Popup>
                <strong>{listing.title}</strong>
                <br />
                {listing.area && listing.city
                  ? `${listing.area}, ${listing.city}`
                  : listing.area || listing.city}
              </Popup>
            </Marker>
          ))}

          {flyCoords && <FlyToLocation coords={flyCoords} />}

          {userLocation && (
            <Marker position={userLocation}>
              <Popup>You are here</Popup>
            </Marker>
          )}
        </MapContainer>
      )}

      {/* Back button */}
      <div className="absolute top-20 left-3 z-[1000]">
        <Link to="/home">
          <button
            className="bg-white border border-gray-300 rounded-full p-1 cursor-pointer"
            onClick={() => setScreen("full")}
          >
            <img src={arrleft} alt="back" />
          </button>
        </Link>
      </div>

      {/* Search bar */}
      <div className="absolute top-17 left-52 -translate-x-1/2 z-[1000] w-[80%]">
        <input
          type="text"
          placeholder="Search by title, area, or city..."
          className="w-full p-3 border border-gray-300 rounded-[25px] shadow-sm focus:outline-none bg-white focus:ring-2 focus:ring-blue-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Carousel */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 overflow-x-auto px-4 max-w-[90%] z-[1000]">
        {filteredListings.map((listing) => (
          <div
            key={listing.id}
            onClick={() => {
              setFlyCoords(listing.coords);
              createRoute(listing.coords);
            }}
            className="flex items-center border border-[#EDF1F5] bg-[#FFFFFF] rounded-lg min-w-[340px] cursor-pointer"
          >
            <img
              src={listing.image}
              alt={listing.title}
              className="rounded-l-lg w-[114.33px] h-[172px] object-cover"
            />
            <div className="p-3 flex flex-col gap-3">
              <div className="flex flex-col items-start gap-2">
                <h2 className="text-[16px] font-bold text-start text-[#2D2E2E]">
                  {listing.title.slice(0, 20)}...
                </h2>
                <p className="text-[10px] text-[#A6A9AC]">
                  {listing.area && listing.city
                    ? `${listing.area}, ${listing.city}`
                    : listing.area || listing.city}
                </p>
                <div className="flex items-center gap-1">
                  <img src={halfStar} alt="star" />
                  <p className="text-[10px] text-[#2D2E2E]">
                    {listing.rating}{" "}
                    <span className="text-[#A6A9AC]">
                      ({listing.review} Review)
                    </span>
                  </p>
                </div>
                <div className="flex text-[10px] gap-3">
                  <div className="flex items-center gap-1">
                    <img src={bed} alt="bed" />
                    <p className="text-[#A6A9AC]">{listing.beds} room</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <img src={bath} alt="bath" />
                    <p className="text-[#A6A9AC]">{listing.baths} bath</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <img src={size} alt="size" />
                    <p className="text-[#A6A9AC]">{listing.sizes} m2</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                  <h2 className="text-[16px] font-bold text-[#2D2E2E]">
                    {listing.price.toLocaleString("en-NG", {
                      style: "currency",
                      currency: "NGN",
                    })}
                  </h2>
                  <p className="text-[10px] text-[#A6A9AC]">/night</p>
                </div>
                <img src={heart} alt="favorite" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapComponent;
