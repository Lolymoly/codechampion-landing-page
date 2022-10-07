import { Box, Button, Typography } from "@mui/material";
import { NextPage } from "next";
import Image from "next/image";

const FirstPage: NextPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        width: "100%",
        height: "auto",
        backgroundColor: "#000E1E",
        padding: {
          xs: "4vw 0px 0px 0px",
          sm: "0px 60px 0px 60px",
          md: "4vw 80px 8vw 80px",
        },
      }}
    >
      <div>
        <Typography
          sx={{
            fontFamily: "Kanit",
            fontStyle: "normal",
            fontWeight: "600",
            textAlign: { xs: "center", sm: "left" },
            fontSize: { xs: "7vw", sm: "3.6vw", md: "3.4vw", lg: "3.2vw" },
            lineHeight: "160%",
            paddingLeft: {
              xs: "0vw",
              sm: "0vw",
              md: "0vw",
              lg: "2vw",
              xl: "2vw",
            },
            marginLeft: {
              sm: "-1vw",
              md: "0vw",
            },
            marginTop: { xs: "7vw", sm: "8vw", md: "8vw", lg: "8vw" },
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
            textAlign: { xs: "center", sm: "left" },
            fontSize: { xs: "2.2vw", sm: "1.4vw", md: "1.3vw", lg: "1.1vw" },
            paddingTop: { xs: "3vw", sm: "1vw" },
            paddingLeft: {
              xs: "0vw",
              sm: "0vw",
              md: "0vw",
              lg: "2vw",
              xl: "2vw",
            },
            marginLeft: {
              sm: "-1vw",
              md: "0vw",
            },
            lineHeight: "180%",
            color: "white",
          }}
        >
          เรียนออนไลน์ผ่านคลิปวิดีโอกว่า 20 ชั่วโมง ที่ไหนก็ได้ เมื่อไหร่ก็ได้
          <br></br>
          ครบทุกบทใน สอวน. ค่าย 1
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", sm: "left" },
            marginTop: "6vw",
            flexDirection: "row",
            paddingLeft: {
              xs: "0vw",
              sm: "0vw",
              md: "0vw",
              lg: "2vw",
              xl: "2vw",
            },
          }}
        >
          <Button
            href="https://m.me/codechampionth"
            variant="outlined"
            sx={{
              backgroundColor: "white",
              color: "black",
              fontFamily: "Kanit",
              width: { xs: "26vw", sm: "15vw", md: "10.5vw" },
              height: { xs: "8vw", sm: "4vw", md: "3.5vw" },
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: { xs: "3vw", sm: "1.6vw", md: "1.3vw" },
              borderRadius: "10px",
              textTransform: "none",
              marginLeft: {
                sm: "-1vw",
                md: "0vw",
              },
            }}
          >
            Register
          </Button>

          <Button
            href="https://www.facebook.com/CodeChampionTH/posts/103339842546095"
            variant="outlined"
            sx={{
              marginLeft: "20px",
              fontFamily: "Kanit",
              color: "white",
              width: { xs: "26vw", sm: "15vw", md: "10.5vw" },
              height: { xs: "8vw", sm: "4vw", md: "3.5vw" },
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: { xs: "3vw", sm: "1.6vw", md: "1.3vw" },
              borderRadius: "10px",
              textTransform: "none",
            }}
          >
            Learn More
          </Button>
        </Box>
      </div>
      <div></div>
      <Box
        sx={{
          display: "flex",
          position: "relative",
          width: { xs: "80vw", sm: "40vw" },
          height: { xs: "67.04vw", sm: "33.52vw" },
          marginLeft: { xs: "auto", sm: "auto" },
          marginRight: { xs: "auto", sm: "-4vw", md: "0vw" },
          marginTop: "50px",
          marginBottom: "100px",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <Image
          src="/course-description.png"
          alt="codechampion-course-description"
          layout="fill"
        />
      </Box>
    </Box>
  );
};

export { FirstPage };
