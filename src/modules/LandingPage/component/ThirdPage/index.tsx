import { Box, Button, Typography } from "@mui/material";
import { NextPage } from "next";
import Image from "next/image";

const ThirdPage: NextPage = () => {
  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        flexDirection: "row",
        width: "100vw",
        height: "50vw",
        backgroundColor: "#091C3B",
        padding: "6vw",
        paddingTop: "12vw",
      }}
    >
      <div>
        <Typography
          sx={{
            fontFamily: "Kanit",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "4vw",
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
            fontWeight: "300",
            fontSize: "1.5vw",
            lineHeight: "180%",
            color: "white",
          }}
        >
          สวยงาม เนื้อหาครบ ได้ใจความ มีทั้งแบบคู่มือและ Slide
        </Typography>
      </div>
      <Box
        sx={{
          display: "inline-block",
          position: "absolute",
          width: "30vw",
          height: "43.3vw",
          right: "4vw",
          top: "2.5vw",
          border: "1px solid black",
        }}
      >
        <Image src="/sample-sheet-doc.jpg" layout="fill" />
      </Box>
      <Box
        sx={{
          display: "inline-block",
          position: "absolute",
          width: "26.5vw",
          height: "15vw",
          right: "28.3vw",
          bottom: "4.2vw",
          border: "1px solid black",
        }}
      >
        <Image src="/sample-sheet-slide.jpg" layout="fill" />
      </Box>
    </div>
  );
};

export { ThirdPage };
