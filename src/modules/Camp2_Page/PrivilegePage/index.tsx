import { Box, Button, Typography } from "@mui/material";
import { NextPage } from "next";
import Image from "next/image";
import { BulletPoint } from "../styled";

//finish xs, sm
const PrivilegePage: NextPage = () => {
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
        <Image
          src="/codechampion-logo.png"
          alt="codechampion-logo"
          layout="fill"
        />
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
            fontSize: { xs: "5.5vw", sm: "3.5vw", md: "3.5vw", lg: "3.1vw" },
            lineHeight: "160%",
            color: "#000000",
            marginTop: { xs: "0vw", sm: "17vw" },
            marginBottom: { xs: "5vw", sm: "2vw" },
            marginRight: { lg: "3vw" },
          }}
        >
          สิทธิพิเศษสำหรับนักเรียนในคอร์สนี้
        </Typography>
        <Box
          sx={{
            fontFamily: "Kanit",
            fontStyle: "normal",
            fontWeight: "500",
            marginLeft: { xs: "10vw", sm: "auto" },
            marginRight: { xs: "0vw", sm: "3vw" },
            marginBottom: { xs: "15vw" },
            fontSize: { xs: "2.5vw", sm: "1.5vw" },
            lineHeight: "300%",
            color: "#000000",
          }}
        >
          <BulletPoint></BulletPoint>
          เข้าถึงบทความและคำแนะนำพิเศษแบบ Exclusive ใน Private Group
          <br />
          <BulletPoint></BulletPoint>
          สอนสดทุกคาบ สามารถเข้าคลาสมาถามตอบข้อสงสัยระหว่างเรียนได้
          <br />
          <BulletPoint></BulletPoint>
          ดูวิดีโอทบทวนย้อนหลังได้ไม่จำกัดชั่วโมง ตลอดระยะเวลา 2 ปี
          <br />
          <BulletPoint></BulletPoint>
          มีเอกสาร โจทย์ที่คัดมาอย่างดี พร้อมเฉลยละเอียดทุกคาบ
          <br />
          <BulletPoint></BulletPoint>
          สอนโดยพี่ธีและพี่เคอซา อดีตนักเรียนค่ายสสวท. 2 (ค่ายสุดท้าย) <br />
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

export { PrivilegePage };
