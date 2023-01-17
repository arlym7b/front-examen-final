import React from 'react'
import Typography from '@mui/material/Typography';
import { Styler } from '../../Styler/Styler';

const Titulo = ({ titulo }) => {
    return (
        <Typography variant="overline">
            <h1>
                {titulo}
            </h1>
        </Typography>
    )
}

export default Titulo