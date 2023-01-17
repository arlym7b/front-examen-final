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
  const [lineas, setLineas] = useState([]);
  const [lineasFiltradas, setLineasFiltradas] = useState([]);
  const [lineasAux, setLineasAux] = useState([]);

  const getLogs = async () => {
    setLineas([])
    setLineasFiltradas([])

    // const response = await axios.get("http://localhost:8000/lineas");
    const response = await axios.get("https://daniroura.deta.dev/lineas");
    setCargando(false);
    setLineas(response.data)
    setLineasFiltradas(lineas)
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
      setLineasFiltradas(lineas);
      console.log("lowercasedValue es vacio")

    } else {
      setLineasAux([])

      lineas.forEach(element => {
        if (element.nombreParada.toLowerCase().includes(lowercasedValue)) {
          lineasAux.push(element)
          console.log(element.nombreParada)
        }
      });      
      setLineasFiltradas(lineasAux) // Sin hacer set no se actualizan los componentes como el mapa
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

            <Mapa lineas={lineasFiltradas} />

          </Container>
        </Container>
      </div >
    )
  }
}

export default Main

/*

 const handleSearch = (value) => {
    filterData(value);
  };

  const filterData = (value) => {
    console.log(value)
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") {
      setLineasFiltradas(lineas);
      console.log("lowercasedValue es vacio")
    } else {
      setArticulosFiltrados([])
      articulosCopia.forEach(element => {
        if (element.descripcion.toLowerCase().includes(lowercasedValue)) {
          articulosFiltrados.push(element)
        }
      });
      setArticulos(articulosFiltrados)
    };
  };


          <Grid container spacing={2} sx={{ paddingTop: '10px' }}>
            <Grid item md={3}>
              <SearchBar
                style={Styler.pads}
                placeholder="Buscar por descripción"
                onChange={(event) => handleSearch(event.target.value)}
                searchBarWidth='720px'
              />

            </Grid>
          </Grid>




 const filterData = (value) => {
    setValues(value)
    console.log(value)

    // const lowercasedValue = value.toLowerCase().trim();

    if (lowercasedValue === "") {
      setArticulos(articulosCopia);
      console.log("lowercasedValue es vacio")
    } else {
      setArticulosFiltrados([])
      articulosCopia.forEach(element => {
        if (element.descripcion.toLowerCase().includes(lowercasedValue)) {
          articulosFiltrados.push(element)
        }
      });
      setArticulos(articulosFiltrados)
    };
  };

 <TextField
            type="number"
            placeholder='Numero Línea'
            fullWidth label="Linea" {...register('numeroLinea')}
            error={errors.numeroLinea ? true : false}
            helperText={errors.precio?.message}
            name='numeroLinea' required
            onChange={(event) => handleChange({ ...values, precio: event.target.value })}
          />


*/