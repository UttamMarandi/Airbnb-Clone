import { useEffect, useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";
const Map = ({ searchResults }) => {
  const [selectLocation, setSelectLocation] = useState({});
  // ommit the the array searchResult
  const coordinates = searchResults?.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));
  // console.log(coordinates);
  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 8,
  });
  return (
    <ReactMapGL
      mapStyle="mapbox://styles/tomh47/ckuf5pyux7fbq18s0656crf8a"
      mapboxApiAccessToken="pk.eyJ1IjoidG9taDQ3IiwiYSI6ImNrdWY1bTczZTFvcHgybm12cmNnNXEwdDMifQ.J7hFgUVZWLSivPJfZ7yOng"
      {...viewport} //spread operator
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      {searchResults?.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              onClick={() => setSelectLocation(result)}
              aria-label="push-pin"
              role="img"
              className="cursor-pointer animate-bounce text-2xl"
            >
              📌
            </p>
          </Marker>
          {selectLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectLocation({})}
              latitude={result.lat}
              longitude={result.long}
              closeOnClick={true}
            >
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
};

export default Map;
