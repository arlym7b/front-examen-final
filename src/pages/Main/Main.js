import React, { useEffect, useState } from 'react'
import { Styler } from '../../components/Styler/Styler';
import { CircularProgress } from '@mui/material';
import Container from '@mui/material/Container';
import axios from 'axios';
import Titulo from '../../components/common/Titulo/Titulo';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Mapa from '../../components/Mapa/Mapa';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import Grid from '@mui/material/Grid';
import { Button, TextField } from '@mui/material';
import SearchBar from '../../components/common/SearchBar/SearchBar';

const Main = () => {
  const navigate = useNavigate();
  const [cargando, setCargando] = useState(true);
  const [aparcamientos, setAparcamientos] = useState([]);
  const [aparcamientosFiltradas, setAparcamientosFiltradas] = useState([]);
  const [aparcamientosAux, setAparcamientosAux] = useState([]);

  const getLogs = async () => {
    setAparcamientos([])
    setAparcamientosFiltradas([])

    //const response = await axios.get("http://localhost:8000/aparcamientos");
    const response = await axios.get("https://o5gui6.deta.dev/aparcamientos");
    setCargando(false);
    setAparcamientos(response.data)
    setAparcamientosFiltradas(aparcamientos)
  }

  useEffect(() => {
    getLogs()
  }, [cargando]);

  /******************************** FILTROS ********************************/

  const handleSearch = (value) => {
    filterData(value);
  };

  const filterData = (value) => {
    console.log(value)
    
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") {
      setAparcamientosFiltradas(aparcamientos);
      console.log("lowercasedValue es vacio")

    } else {
      setAparcamientosAux([])

      aparcamientos.forEach(element => {
        if (element.nombreParada.toLowerCase().includes(lowercasedValue)) {
          aparcamientosAux.push(element)
          console.log(element.nombreParada)
        }
      });      
      setAparcamientosFiltradas(aparcamientosAux) // Sin hacer set no se actualizan los componentes como el mapa
    };
  };

  /******************************** CARGANDO ********************************/
  if (cargando) {
    return (
      <div align="center" style={Styler.loading}>
        <CircularProgress />
      </div>);
    /******************************** MOSTRAR FILTROS Y MAPA ********************************/
  } else {
    return (
      <div class="page" style={Styler.page}>
        <Container maxWidth="xl" sx={{ mb: 3 }}>
          <Titulo titulo="Bienvenido a EMTInfo" />


          <Grid container spacing={2} sx={{ paddingTop: '10px' }}>
            <Grid item md={3}>
              <SearchBar
                style={Styler.pads}
                placeholder="Buscar por nombre de parada"
                onChange={(event) => handleSearch(event.target.value)}
                searchBarWidth='720px'
              />

            </Grid>
          </Grid>

          <Container maxWidth="xl" sx={{ mb: 3 }}>
            <Titulo titulo="Mapa de lineas" />

            <Mapa lineas={aparcamientosFiltradas} />

          </Container>
        </Container>
      </div >
    )
  }
}

export default Main
