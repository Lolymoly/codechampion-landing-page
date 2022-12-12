import { Box, Button, Typography } from "@mui/material";
import { NextPage } from "next";
import Image from "next/image";

const PreviewPage: NextPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        position: "relative",
        flexDirection: { xs: "column", sm: "column" },
        width: "100%",
        height: "auto",
        backgroundColor: "#091C3B",
        padding: { xs: "12vw 6vw", sm: "8vw 6vw 8vw 6vw" },
      }}
    >
      <Typography
        sx={{
          width: "auto",
          marginRight: { xs: "0px", sm: "0px" },
          fontFamily: "Kanit",
          fontStyle: "normal",
          fontWeight: "600",
          textAlign: { xs: "center", sm: "center" },
          fontSize: { xs: "7vw", sm: "28px", md: "35px", lg: "3.2vw" },
          paddingTop: { xs: "4vw", sm: "6vw" },
          lineHeight: "130%",
          color: "white",
        }}
      >
        ตัวอย่างเอกสารที่ใช้สอนจริง
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginLeft: "auto",
          marginRight: "auto",
          position: "relative",
          width: "80vw",
          height: "80vw",
        }}
      >
        <Image
          src="/course2-preview-png.png"
          layout="fill"
          alt="course-preview"
          objectFit="contain"
        />
      </Box>
    </Box>
  );
};

export { PreviewPage };
