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
        padding: "6vw",
        paddingTop: "12vw",
      }}
    >
      <div>
        <Typography
          sx={{
            width: "auto",
            marginRight: { xs: "0px", sm: "-100px" },
            fontFamily: "Kanit",
            fontStyle: "normal",
            fontWeight: "600",
            textAlign: { xs: "center", sm: "left" },
            fontSize: { xs: "20px", sm: "25px", md: "30px", lg: "40px" },
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
            marginTop: "5vw",
            fontFamily: "Kanit",
            fontStyle: "normal",
            textAlign: { xs: "center", sm: "left" },
            fontWeight: "300",
            fontSize: { xs: "7px", sm: "10px", md: "15px", lg: "20px" },
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
          padding: { xs: "30px 0px", sm: "0px" },
          marginRight: { xs: "auto", sm: "0px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            position: "relative",
            width: "26.5vw",
            height: "15vw",
            mr: "-50px",
            border: "1px solid black",
            zIndex: 3,
          }}
        >
          <Image
            src="/sample-sheet-slide.jpg"
            layout="fill"
            alt="secondPaper"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            position: "relative",
            width: "30vw",
            height: "43.3vw",
            border: "1px solid black",
          }}
        >
          <Image src="/sample-sheet-doc.jpg" layout="fill" alt="paper" />
        </Box>
      </Box>
    </Box>
  );
};

export { ThirdPage };
