"use client";

import Map from "../Map";

export default function MyMap() {
  const position = [51.505, -0.09];

  return (
    // <div className="h-screen w-full">
    //   <GoogleMapReact
    //     bootstrapURLKeys={{ key: "" }}
    //     defaultCenter={defaultProps.center}
    //     defaultZoom={defaultProps.zoom}
    //   >
    //     <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
    //   </GoogleMapReact>
    // </div>

    <Map width="800" height="400" center={position} zoom={12}>
      {({ TileLayer, Marker, Popup }) => (
        <>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </>
      )}
    </Map>
  );
}
