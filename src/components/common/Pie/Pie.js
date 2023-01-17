import React from 'react'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';
import Grid from '@mui/material/Grid';

const item = {
    display: 'flex',
    alignItems: 'center',
    minWidth: '200px'
};

const Pie = ({ texto }) => {
  return (
    <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" >
        <Grid xs={5}>
            <Box sx={item}>
                <CopyrightIcon sx={{pr: 1}}/>
                <Typography variant="h6" sx={{ fontFamily: "roboto" }} noWrap>
                {texto}
                </Typography>
            </Box>
        </Grid>   
    </Grid>
        
  )
}

export default Pie