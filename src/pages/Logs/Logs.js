import React, { useEffect, useState } from 'react'
import { Styler } from '../../components/Styler/Styler';
import { CircularProgress } from '@mui/material';
import Container from '@mui/material/Container';
import axios from 'axios';
import Titulo from '../../components/common/Titulo/Titulo';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Logs = ({ usuario }) => {
    const navigate = useNavigate();
    const [logs, setLogs] = useState([]);
    const [cargando, setCargando] = useState(true);

    const getLogs = async () => {
        setLogs([])

        // const response = await axios.get("http://localhost:8000/logs");
        const response = await axios.get("https://daniroura.deta.dev/logs");
        setLogs(response.data)
        setCargando(false);
    }

    useEffect(() => {
        getLogs()
    }, [cargando]);

    if (cargando) {
        return (
            <div align="center" style={Styler.loading}>
                <CircularProgress />
            </div>);
    } else {
        return (
            <div class="page" style={Styler.page}>
                <Container maxWidth="xl" sx={{ mb: 3 }}>
                    <Titulo titulo="Logs completos" />

                    {logs.map((log, index) => (
                        <Box sx={{ marginBottom: '20px' }}>
                            <Typography>Usuario: {log.email}</Typography>
                            <Typography>Caducidad: {log.caducidad.date}</Typography>
                            <Typography>Token: {log.token}</Typography>
                        </Box>
                    ))}

                </Container>
            </div >
        )
    }
}

export default Logs