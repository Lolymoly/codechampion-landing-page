import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";

const pages = ["สอวน. ค่าย 2", "สอวน. ค่าย 1"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const toPosn1 = () => {
    location.href = "/posn1";
  };
  const toPosn2 = () => {
    location.href = "/posn2";
  };
  const toHome = () => {
    location.href = "/";
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#000E1E",
        fontFamily: "Kanit",
        fontStyle: "normal",
        paddingTop: "10px",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: "flex",
              position: "relative",
              width: { xs: "100px", lg: "10vw" },
              height: { xs: "40px", lg: "4vw" },
              marginLeft: { xs: "0px", lg: "2vw" },
            }}
          >
            <Image
              src="/cc-logo-navbar.png"
              alt="cc-logo"
              layout="fill"
              onClick={toHome}
            ></Image>
          </Box>

          {/* // mobile navbar */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "right",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                fontFamily: "Kanit",
                fontStyle: "normal",
                fontWeight: "400",
                color: "white",
              }}
            >
              <MenuItem
                onClick={toPosn1}
                sx={{
                  color: "white",
                  fontSize: "4.2vw",
                }}
              >
                ค่าย 1
              </MenuItem>
              <MenuItem
                onClick={toPosn2}
                sx={{
                  color: "white",
                  fontSize: "4.2vw",
                }}
              >
                ค่าย 2
              </MenuItem>
            </Menu>
          </Box>

          {/* # navbar list */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              marginLeft: "5vw",
            }}
          >
            <Button
              className="navButton"
              onClick={toPosn1}
              sx={{
                my: 2,
                color: "white",
                fontFamily: "Kanit",
                fontStyle: "normal",
                fontWeight: "400",
              }}
            >
              คอร์ส สอวน. ค่าย 1
            </Button>
            <Button
              className="navButton"
              onClick={toPosn2}
              sx={{
                my: 2,
                color: "white",
                fontFamily: "Kanit",
                fontStyle: "normal",
                fontWeight: "400",
              }}
            >
              คอร์ส สอวน. ค่าย 2
            </Button>
          </Box>
        </Toolbar>
      </Container>
      {/* <Divider
        light
        sx={{
          marginTop: "0.5vw",
          marginLeft: "auto",
          marginRight: "auto",
          width: "90%",
          color: "white",
          backgroundColor: "white",
          opacity: "50%",
        }}
      /> */}
    </AppBar>
  );
}
export default NavBar;
