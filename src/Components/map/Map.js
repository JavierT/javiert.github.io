import React from "react";
import track from './map.json';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import { divIcon } from 'leaflet';
import "./map.scss";

const MapComponent = () => {
  const zoom = window.innerWidth > 959 ?  3 : 3;
  const centerX = 50.335491;
  const centerY = window.innerWidth > 959 ? -0.705931 : 3;
  
  const iconSchool = divIcon({
    className: 'custom-div-icon',
    html: "<div style='background-color:#4838cc;' class='marker-pin'></div><i class='fa  fa-school awesome'>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
  });

  const iconHome = divIcon({
    className: 'custom-div-icon',
    html: "<div style='background-color:#4838cc;' class='marker-pin'></div><i class='fa  fa-home awesome'>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
  });

  const iconExchange = divIcon({
    className: 'custom-div-icon',
    html: "<div style='background-color:#4838cc;' class='right-marker-pin'></div><i class='fa fa-suitcase awesome icon-right'></i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
  });


  const iconUni = divIcon({
    className: 'custom-div-icon',
    html: "<div style='background-color:#4838cc;' class='inverted-marker-pin'></div><i class='fa fa-university awesome icon-inverted'>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
  });

  const iconMaster = divIcon({
    className: 'custom-div-icon',
    html: "<div style='background-color:#4838cc;' class='marker-pin'></div><i class='fa  fa-graduation-cap awesome'>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
  });


  return (
    <div className='box-info mt-2 map-height map-position'>
      <div className='map-help'>Click on the icons to get the education details</div>
      <MapContainer center={[centerX, centerY]} zoom={zoom} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMapContainer</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON key={'mapEducation'} data={track} />`
        <Marker
          icon={iconMaster} 
          position={[61.4498286, 23.8589986]}
        >
          <Popup>
            <div className='map-popup'>
              <span className='title'>Master's Degree Programme in UX</span>
              <span>Tampere University of Technology Finland</span>
              <span>2013 - 2015</span>
            </div>
          </Popup>
        </Marker>
        <Marker
          icon={iconExchange}
          position={[ 60.1871438, 24.8276878]}
        >
          <Popup>
            <div className='map-popup'>
              <span className='title'>Exchange student - Master of Science (MSc)</span>
              <span>Aalto-yliopisto Helsinki Filand</span>
              <span>2010 - 2011</span>
            </div>
          </Popup>
        </Marker>
        <Marker
          icon={iconUni}
          position={[ 41.6835687, -0.8859278]}
        >
          <Popup>
            <div className='map-popup'>
              <span className='title'>Msc in Computer Engineering</span>
              <span>University of Zaragoza Spain</span>
              <span>2005 - 2012</span>
            </div>
          </Popup>
        </Marker>
        <Marker 
          icon={iconSchool} 
          position={[42.138939, -0.4085763]}
          >
          <Popup>
          <div className='map-popup'>
          <span className='title'>High school degree in science</span>
              <span>Colegio Altoaragon - Huesca</span>
              <span>2004</span>
            </div>
          </Popup>
        </Marker>
        <Marker 
          icon={iconHome} 
          position={[43.088226, 1.873725]}
          >
          <Popup>
          <div className='map-popup'>
          <span className='title'>Finish!</span>
              <span></span>
              <span>2020</span>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}; 

export default MapComponent;
// 'https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey={apikey}', {
// 	attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'