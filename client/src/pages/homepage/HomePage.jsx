import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";

import "leaflet/dist/leaflet.css";

import "./HomePage.css";
import imgart1 from "../../assets/images/img-art1.jpeg";

import img from "../../assets/images/img-homepage.jpeg";

const position = [44.8622756, -0.5930638];

export default function HomePage() {
  return (
    <>
      <img src={img} className="photo-homage" alt="photographie" />
      <h1 className="title-article-one"> Article 1 </h1>
      <article className="article-one">
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac turpis
          egestas integer eget aliquet nibh praesent. Nulla posuere sollicitudin
          aliquam ultrices sagittis orci a. Lorem ipsum dolor sit amet. Odio
          pellentesque diam volutpat commodo sed egestas egestas fringilla
          phasellus. Sed vulputate odio ut enim blandit. Vel turpis nunc eget
          lorem dolor sed viverra ipsum nunc. Elit sed vulputate mi sit amet.
          Felis imperdiet proin fermentum leo vel orci porta. Ut pharetra sit
          amet aliquam id diam maecenas ultricies mi. Condimentum vitae sapien
          pellentesque habitant morbi. Nisl vel pretium lectus quam. Molestie a
          iaculis at erat. Turpis cursus in hac habitasse platea dictumst
          quisque sagittis.
        </p>
        <div> 
        <img src={imgart1} className="img-art1" alt="photographie" /></div>
      </article>
       <h1 className="title-article-two" > Article 2 </h1>
      <article className="article-two"> 
    
   <div>
      <MapContainer
        center={position}
        zoom={12}
        scrollWheelZoom={false}
        id="map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>Le petit potier</Popup>
        </Marker>
      </MapContainer>
      </div>
      <p className="text-two">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac turpis
          egestas integer eget aliquet nibh praesent. Nulla posuere sollicitudin
          aliquam ultrices sagittis orci a. Lorem ipsum dolor sit amet. Odio
          pellentesque diam volutpat commodo sed egestas egestas fringilla
          phasellus. Sed vulputate odio ut enim blandit. Vel turpis nunc eget
          lorem dolor sed viverra ipsum nunc. Elit sed vulputate mi sit amet.
          Felis imperdiet proin fermentum leo vel orci porta. Ut pharetra sit
          amet aliquam id diam maecenas ultricies mi. Condimentum vitae sapien
          pellentesque habitant morbi. Nisl vel pretium lectus quam. Molestie a
          iaculis at erat. Turpis cursus in hac habitasse platea dictumst
          quisque sagittis. Velit laoreet id donec ultrices tincidunt arcu non
          sodales. Nec ultrices dui sapien eget mi proin sed. Tempus egestas sed
          sed risus pretium quam vulputate dignissim suspendisse.
        </p>
      </article>
    </>
  );
}
