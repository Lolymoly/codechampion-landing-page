import { Box, Button, Typography } from "@mui/material";
import { NextPage } from "next";
import Image from "next/image";

const ThirdPage: NextPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        position: "relative",
        flexDirection: { xs: "column", sm: "row" },
        width: "100%",
        height: "auto",
        backgroundColor: "#091C3B",
        padding: { xs: "12vw 6vw", sm: "8vw 6vw 8vw 6vw" },
      }}
    >
      <div>
        <Typography
          sx={{
            width: "auto",
            marginRight: { xs: "0px", sm: "-120px" },
            fontFamily: "Kanit",
            fontStyle: "normal",
            fontWeight: "600",
            textAlign: { xs: "center", sm: "left" },
            fontSize: { xs: "7vw", sm: "28px", md: "35px", lg: "3.2vw" },
            paddingTop: { xs: "4vw", sm: "6vw" },
            lineHeight: "130%",
            color: "white",
          }}
        >
          ฟรี! เอกสารประกอบการเรียน
          <br />
          แบบ PDF สะดวก อ่านง่าย
        </Typography>

        <Typography
          sx={{
            marginTop: { xs: "5vw", sm: "5vw" },
            fontFamily: "Kanit",
            fontStyle: "normal",
            textAlign: { xs: "center", sm: "left" },
            fontWeight: "300",
            marginRight: { xs: "0px", sm: "-120px" },
            fontSize: { xs: "2.3vw", sm: "12px", md: "15px", lg: "20px" },
            lineHeight: "180%",
            color: "white",
          }}
        >
          สวยงาม เนื้อหาครบ ได้ใจความ มีทั้งแบบคู่มือและ Slide
        </Typography>
      </div>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          marginLeft: "auto",
          marginTop: { xs: "0px", sm: "0px" },
          padding: { xs: "30px 0px", sm: "0px" },
          marginRight: { xs: "auto", sm: "0px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            position: "relative",
            width: { xs: "50vw", sm: "26.5vw" },
            height: { xs: "28.3vw", sm: "15vw" },
            mr: "-50px",
            border: "1px solid black",
            zIndex: 3,
          }}
        >
          <Image
            src="/sample-sheet-slide.jpg"
            layout="fill"
            alt="sample-sheet-slide"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            position: "relative",
            width: { xs: "41.57vw", sm: "30vw" },
            height: { xs: "60vw", sm: "43.3vw" },
            border: "1px solid black",
          }}
        >
          <Image
            src="/sample-sheet-doc.jpg"
            layout="fill"
            alt="sample-sheet-doc"
          />
        </Box>
      </Box>
    </Box>
  );
};

export { ThirdPage };
