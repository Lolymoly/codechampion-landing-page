import { Box, Button, Typography } from "@mui/material";
import { NextPage } from "next";
import Image from "next/image";

const FirstPage: NextPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100vw",
        height: "50vw",
        backgroundColor: "#000E1E",
        padding: "80px",
      }}
    >
      <div>
        <Typography
          sx={{
            fontFamily: "Kanit",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: { xs: "20px", md: "30px", lg: "49px" },
            lineHeight: "160%",
            marginTop: "50px",
            color: "white",
          }}
        >
          คอร์ส สอวน. คอมพิวเตอร์<br></br>ค่าย 1 ฉบับสมบูรณ์<br></br>
        </Typography>

        <Typography
          sx={{
            marginTop: "10px",
            fontFamily: "Kanit",
            fontStyle: "normal",
            fontWeight: "300",
            fontSize: { xs: "7px", md: "11px", lg: "18px" },
            lineHeight: "180%",
            color: "white",
          }}
        >
          เรียนออนไลน์ผ่านคลิปวิดีโอกว่า 19 ชั่วโมง ที่ไหนก็ได้<br></br>
          เมื่อไหร่ก็ได้ ครบทุกบทใน สอวน. ค่าย 1
        </Typography>
        <div
          style={{
            display: "flex",
            marginTop: "50px",
            flexDirection: "row",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "white",
              color: "black",
              fontFamily: "Kanit",
              width: "150px",
              height: "52px",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "20px",
              borderRadius: "10px",
              textTransform: "none",
            }}
          >
            Register
          </Button>

          <Button
            variant="outlined"
            sx={{
              marginLeft: "20px",
              fontFamily: "Kanit",
              color: "white",
              width: "150px",
              height: "52px",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "20px",
              borderRadius: "10px",
              textTransform: "none",
            }}
          >
            Learn More
          </Button>
        </div>
      </div>
      <div></div>
      <Box
        sx={{
          display: "flex",
          position: "relative",
          width: { xs: "200px", md: "400px", lg: "598px" },
          height: { xs: "167px", md: "335px", lg: "501px" },
          minWidth: { xs: "200px", md: "400px", lg: "598px" },
          minHeight: { xs: "167px", md: "335px", lg: "501px" },
          marginLeft: "auto",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <Image src="/course-description.png" layout="fill" />
      </Box>
    </div>
  );
};

export { FirstPage };
