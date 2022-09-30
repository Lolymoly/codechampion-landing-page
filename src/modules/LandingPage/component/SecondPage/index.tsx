import { Box, Button, Typography } from "@mui/material";
import { NextPage } from "next";
import Image from "next/image";
import { BulletPoint, BulletText } from "../../styled";
//finish xs, sm
const SecondPage: NextPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        width: "100%",
        height: "auto",
        backgroundColor: "white",
      }}
    >
      <Box
        sx={{
          display: "flex",
          position: "relative",
          marginLeft: { xs: "auto", sm: "50px", md: "5vw" },
          marginTop: { xs: "10vw", sm: "20vw" },
          width: { xs: "50vw", sm: "30vw", lg: "35vw" },
          height: { xs: "50vw", sm: "30vw", lg: "35vw" },
          marginRight: { xs: "auto", sm: "50px" },
        }}
      >
        <Image src="/codechampion-logo.png" layout="fill" />
      </Box>

      <Box
        sx={{
          marginLeft: { xs: "0vw", sm: "1vw", md: "auto" },
          marginRight: { md: "2vw", lg: "0vw" },
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Kanit",
            fontStyle: "normal",
            fontWeight: "800",
            textAlign: { xs: "center", sm: "left" },
            fontSize: { xs: "6vw", sm: "4vw", md: "4vw", lg: "3.5vw" },
            lineHeight: "160%",
            color: "#000000",
            marginTop: { xs: "0vw", sm: "17vw" },
            marginBottom: { xs: "5vw", sm: "2vw" },
          }}
        >
          ทำไมต้อง CodeChampion ?
        </Typography>
        <Box
          sx={{
            fontFamily: "Kanit",
            fontStyle: "normal",
            fontWeight: "500",
            marginLeft: { xs: "10vw", sm: "auto" },
            marginRight: { xs: "0vw", sm: "2vw" },
            marginBottom: { xs: "15vw" },
            fontSize: { xs: "2.5vw", sm: "1.5vw", md: "1.5vw", lg: "1.5vw" },
            lineHeight: "300%",
            color: "#000000",
          }}
        >
          <BulletPoint></BulletPoint>
          สอนตั้งแต่พื้นฐานจนจบเนื้อหาทุกบทในค่าย
          ไม่มีพื้นฐานมาก่อนก็สามารถเรียนได้
          <br />
          <BulletPoint></BulletPoint>
          สามารถปรึกษาเนื้อหา/โจทย์/วิธีการเตรียมตัว กับผู้สอนได้ไม่จำกัด
          <br />
          <BulletPoint></BulletPoint>
          มีโจทย์และเอกสารประกอบการเรียนทุกบท
          <br />
          <BulletPoint></BulletPoint>
          ไม่จำกัดชั่วโมงเรียน ตลอดอายุคอร์ส 2 ปี
          <br />
          <BulletPoint></BulletPoint>
          สอนโดยนักเรียน สอวน. คอมพิวเตอร์ ตัวจริง <br />
          <BulletPoint></BulletPoint>
          การันตีความสามารถของผู้สอน ด้วยรางวัลเหรียญทองและเหรียญเงิน
          <br />
          <BulletPoint
            style={{
              backgroundColor: "white",
            }}
          ></BulletPoint>
          คอมพิวเตอร์โอลิมปิกระดับประเทศ
          <br />
        </Box>
      </Box>
    </Box>
  );
};

export { SecondPage };
