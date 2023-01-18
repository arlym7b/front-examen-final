import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Box } from '@mui/material';
import L from 'leaflet';
import Image from 'mui-image';
import { Styler } from '../Styler/Styler';

function defaultIcon() {
  return L.icon({
    iconUrl: require("../../images/mapmarker.png"),
    iconSize: [50, 50],
  });
};

const Mapa = ({ aparcamientos }) => {
  const coordenadas = [36.72184282369917, -4.418403224132213];

  return (
    <Box sx={Styler.mapa}>
      <MapContainer
        class="leaflet-container"
        /*style={{ width: "100%", height: "70vh" }}*/
        center={coordenadas}
        zoom={12}
        removeOutsideVisibleBounds={false}
        scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {aparcamientos.map((aparcamiento, idx) =>
          <Marker
            key={`linea-${idx}`}
            position={[aparcamiento.latitud, aparcamiento.longitud]}
            icon={defaultIcon()}>
            <Popup>
              {aparcamiento.nombreParada}
            </Popup>
          </Marker>
        )}

      </MapContainer>
    </Box>
  )
}

export default Mapa

/*

{articulos.map((articulo, idx) =>
          <Marker
            key={`articulo-${idx}`}
            position={[articulo.latitud, articulo.longitud]}
            icon={defaultIcon()}>
            <Popup>
              <TarjetaArticulo
                articulo={articulo}
                mayorPuja={(articulo.precio)}
                funcion={""}
                sonMios={0}
                textoBoton={"Pujar"}
              />
            </Popup>
          </Marker>
        )}


              */