import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import "../styles/map.css";
import moment from "moment";
import { Link } from 'react-router-dom';

const MapComponent = (ads) => {
  const firstPosition = [46.71109, 1.7191036];

  return (
    <Map
      center={firstPosition}
      zoom={6}
      style={{ margin: "0 auto", width: "80%", marginBottom: "40px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {ads.adsDetails.map((ad) => {
        return (
          <Marker
            key={ad.id}
            position={[ad.localisation.Rc, ad.localisation.Ac]}
          >
            <Popup>
              {ad.firstname + " " + ad.lastname} 
              <br /> {ad.specialty} 
              <br />{" "} Début : {moment.unix(ad.start_date.seconds).format("DD MMMM YYYY")}
              <br /> {ad.accomodation ? 'Logement fourni' : ''}
              <br /> <Link to={`/annonces/${ad.id}`}>Voir l'annonce</Link>
            </Popup>
          </Marker>
        );
      })}
    </Map>
  );
};

export default MapComponent;
