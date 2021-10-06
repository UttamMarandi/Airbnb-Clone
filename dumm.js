import { getCenter } from "geolib";
import { Result } from "postcss";
import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

const Map = ({ searchResults }) => {
  //   Transform searchResults(array of objects) to array of objects containing longitude and latitiude only
  const [selectedLocation, setSelectedLocation] = useState({});
  console.log(selectedLocation);
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));
  //   center
  // getCenter gets the center area for all the cordinates provided. This gives us a way to zoom and move the map based on long and lat values.
  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <>
      <ReactMapGL
        mapStyle="mapbox://styles/tomh47/ckuf5pyux7fbq18s0656crf8a"
        mapboxApiAccessToken="pk.eyJ1IjoidG9taDQ3IiwiYSI6ImNrdWY1bTczZTFvcHgybm12cmNnNXEwdDMifQ.J7hFgUVZWLSivPJfZ7yOng"
        {...viewport} //spread operator
        onViewportChange={(viewport) => setViewport(viewport)}
      >
        {/* display markers  */}
        {searchResults.map((result) => (
          <div key={result.long}>
            <Marker
              // to pass markers
              longitude={result.long}
              latitude={result.lat}
              offsetLeft={-20}
              offsetRight={-10}
            >
              {/* result contain the current item from searchResults.  */}
              <p
                onClick={() => setSelectedLocation({ result })}
                className="cursor-pointer text-2xl animate-bounce"
                aria-label="push-pin"
              ></p>
            </Marker>
            {/* Popup when  we click on an marker */}
            {selectedLocation.long === result.long ? (
              <Popup
                closeOnClick={true}
                onClose={() => setSelectedLocation({})}
                longitude={result.long}
                latitude={result.lat}
              >
                {result.title}
              </Popup>
            ) : (
              false
            )}
          </div>
        ))}
      </ReactMapGL>
    </>
  );
};

export default Map;
