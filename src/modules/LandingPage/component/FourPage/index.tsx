import { Box, Button, Typography } from "@mui/material";
import { NextPage } from "next";
import Image from "next/image";
import { BulletPoint, BulletText } from "../../styled";

const FourPage: NextPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100vw",
        height: "50vw",
        backgroundColor: "white",
        padding: "50px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          position: "relative",
          marginTop: "80px",
          width: { xs: "200px", md: "350px", lg: "483px" },
          height: { xs: "200px", md: "350px", lg: "483px" },
          minWidth: { xs: "200px", md: "350px", lg: "483px" },
          minHeight: { xs: "200px", md: "350px", lg: "483px" },
          marginLeft: "50px",
          marginRight: "auto",
        }}
      >
        <Image src="/codechampion-fb.svg" layout="fill" />
      </Box>

      <div
        style={{
          marginLeft: "100px",
          display: "flex",
          flexDirection: "column",
          marginRight: "auto",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Kanit",
            fontStyle: "normal",
            fontWeight: "800",
            fontSize: { xs: "20px", md: "30px", lg: "49px" },
            lineHeight: "160%",
            color: "#00235C",
            marginTop: "200px",
            marginBottom: "20px",
          }}
        >
          สมัครและเรียนได้แล้ววันนี้!
          <br />
          ที่ CodeChampion
        </Typography>
      </div>
    </div>
  );
};

export { FourPage };
