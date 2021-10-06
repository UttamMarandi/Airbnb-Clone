import React, { useState } from "react";
import ReactMapGL from "react-map-gl";

const Map = ({ searchResults }) => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });

  //   Transform searchResults(array of objects) to array of objects container longitude and latitiude only

  return (
    <>
      <ReactMapGL
        mapStyle="mapbox://styles/tomh47/ckuf5pyux7fbq18s0656crf8a"
        mapboxApiAccessToken="pk.eyJ1IjoidG9taDQ3IiwiYSI6ImNrdWY1bTczZTFvcHgybm12cmNnNXEwdDMifQ.J7hFgUVZWLSivPJfZ7yOng"
        {...viewport} //spread operator
        onViewportChange={(viewport) => setViewport(viewport)}
      ></ReactMapGL>
    </>
  );
};

export default Map;
