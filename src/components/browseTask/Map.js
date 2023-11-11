"use client";

import Map from "../Map";

export default function MyMap() {
  const position = [51.505, -0.09];

  return (
    <Map className="mapfortask" width="800" height="400" center={position} zoom={12}>
      {({ TileLayer, Marker, Popup }) => (
        <>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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
