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
import styles from "./navbar.module.css";

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
            <div className="menuDiv">
              <Menu
                className="navMenu"
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
                  backgroundColor: "none",
                }}
              >
                <MenuItem
                  className={styles.menuText}
                  onClick={toPosn1}
                  sx={{
                    color: "black",
                    fontSize: "4.2vw",
                    fontFamily: "Kanit",
                    fontStyle: "normal",
                    fontWeight: "400",
                  }}
                >
                  ค่าย 1
                </MenuItem>
                <MenuItem
                  className={styles.menuText}
                  onClick={toPosn2}
                  sx={{
                    color: "black",
                    fontSize: "4.2vw",
                    fontFamily: "Kanit",
                    fontStyle: "normal",
                    fontWeight: "400",
                  }}
                >
                  ค่าย 2
                </MenuItem>
              </Menu>
            </div>
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
              className={styles.navButton}
              onClick={toPosn1}
              sx={{
                my: 2,
                color: "white",
                fontFamily: "Kanit",
                fontStyle: "normal",
                fontWeight: "400",
                marginRight: "5vw",
              }}
            >
              คอร์ส สอวน. ค่าย 1
            </Button>
            <Button
              className={styles.navButton}
              onClick={toPosn2}
              sx={{
                my: 2,
                color: "white",
                fontFamily: "Kanit",
                fontStyle: "normal",
                fontWeight: "400",
                marginRight: "5vw",
              }}
            >
              คอร์ส สอวน. ค่าย 2
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
