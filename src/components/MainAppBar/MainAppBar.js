import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LoginIcon from '@mui/icons-material/Login';
import Tooltip from '@mui/material/Tooltip';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import Image from 'mui-image';
import { useNavigate } from 'react-router-dom';
import CommonButton from '../common/CommonButton/CommonButton';
import { Styler } from '../Styler/Styler';

const MainAppBar = ({ login }) => {
  const navigate = useNavigate();
  const [log, setLog] = useState(false);
  const [photo, setPhoto] = useState("");

  const logIn = (token) => {
    axios.post("http://localhost:8000/log/" + token.credential).then((response) => {
    //axios.post("https://daniroura.deta.dev/log/" + token.credential).then((response) => {
      setPhoto(response.data.foto);
      login(response.data.usuario);
      setLog(true);
    });
  };

  const logOut = () => {
    setPhoto("");
    login();
    setLog(false);
  };

  const LogButton = () => {
    if (log) {
      return (
        <CommonButton
          variant="contained"
          sx={Styler.logoutbutton}
        >
          <Image
            src={photo}
            height="50px"
            width="50px"
            onClick={() => {
              logOut();
              console.log('Logout correcto');
            }} />
        </CommonButton>
      );
    } else {
      return (
        <GoogleLogin
          onSuccess={credentialResponse => {
            logIn(credentialResponse);
            console.log('Login correcto');
          }}
          onError={() => {
            console.log('Login fallido');
          }}
        />);
    }
  }

  return (
    <AppBar position="static" sx={{ backgroundColor: "#2A4161" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image
            src='https://img.icons8.com/ios-filled/512/circled-v.png'
            height="55px"
            width="55px"
          />

          <Typography
            variant="h4"
            noWrap
            component="a"
            onClick={() => navigate("/")}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Roboto',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            EMTInfo
          </Typography>



          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <CommonButton
              sx={{ my: 2, color: 'white', display: 'block' }}
              onClick={() => navigate("/logs")}
            >
              Ver Logs
              <div
                sx={Styler.text}
                primary="Ver Logs"
              />
            </CommonButton>
          </Box>

          <Tooltip title="Inicio de sesión">
            <LoginIcon sx={{ my: 2, color: 'white', display: { xs: 'flex', md: 'none' }, '&:hover': { color: "#F6358A" } }} />
          </Tooltip>

          <LogButton />

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MainAppBar;

/*
<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >

            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >

              <List>
                {PageList.map((item, index) => (
                  <MenuItem
                    button
                    key={item.id}
                    onClick={() => navigate(item.route)}
                  >
                    {item.label}
                    <ListItemText
                      sx={Styler.text}
                      primary={item.label}
                    />
                  </MenuItem>
                ))}
              </List>

            </Menu>
          </Box>

              <MenuItem key="Anuncios" onClick={handleCloseNavMenu}>
                <Link
                  sx={{
                    textAling: "center",
                    color: "black",
                  }}
                  onClick={() => navigate("/Anuncios")}
                  underline="none"
                >
                  Anuncios
                </Link>
              </MenuItem>
              <MenuItem key="Mis Viviendas" onClick={handleCloseNavMenu}>
                <Link
                  sx={{
                    textAling: "center",
                    color: "black",
                  }}
                  onClick={() => navigate("/Mis Viviendas")}
                  underline="none"
                >
                  Mis Viviendas
                </Link>
              </MenuItem>








<Logo sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />


<table>
          <tbody>
            <tr>
              <td>
                <Image src={photo} height="50px" width="50px" />
              </td>
              <td>
                <CommonButton
                  variant="outlined"
                  size="medium"
                  buttonText={"Logout"}
                  sx = {Styler.logOutButton}
                  onClick={() => {
                    logOut();
                    console.log('Logout correcto');
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>

        */