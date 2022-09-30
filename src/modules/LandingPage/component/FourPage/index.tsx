import { Box, Button, Typography } from "@mui/material";
import { NextPage } from "next";
import Image from "next/image";
import { BulletPoint, BulletText } from "../../styled";

const FourPage: NextPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100vw",
        height: "50vw",
        backgroundColor: "white",
        paddingTop: { xs: "10vw", sm: "0vw" },
        marginBottom: { xs: "20vw", sm: "3vw" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          position: "relative",
          width: { xs: "35vw", md: "35vw", lg: "483px" },
          height: { xs: "35vw", md: "35vw", lg: "483px" },
          marginLeft: { xs: "5vw", sm: "5vw", lg: "5vw" },
          marginRight: { xs: "-1vw", sm: "0vw", md: "-5vw", lg: "auto" },
          marginTop: { xs: "10vw", lg: "10vw" },
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
            fontSize: { xs: "4.8vw", sm: "4.6vw", md: "4.1vw", lg: "4vw" },
            lineHeight: "160%",
            color: "#00235C",
            marginTop: "18vw",
            marginRight: { xs: "0px", sm: "-5vw", md: "0vw" },
            marginLeft: { xs: "-80px", sm: "-10vw", md: "3vw", lg: "-5vw" },
            marginBottom: "20px",
          }}
        >
          สมัครและเรียนได้แล้ววันนี้!
          <br />
          ที่ CodeChampion
        </Typography>
      </div>
    </Box>
  );
};

export { FourPage };
