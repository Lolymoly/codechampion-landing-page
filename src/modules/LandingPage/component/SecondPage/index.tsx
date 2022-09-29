import { Box, Button, Typography } from "@mui/material";
import { NextPage } from "next";
import Image from "next/image";
import { BulletPoint, BulletText } from "../../styled";

const SecondPage: NextPage = () => {
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
          width: { xs: "200px", md: "350px", lg: "483px" },
          height: { xs: "200px", md: "350px", lg: "483px" },
          minWidth: { xs: "200px", md: "350px", lg: "483px" },
          minHeight: { xs: "200px", md: "350px", lg: "483px" },
          marginRight: "auto",
        }}
      >
        <Image src="/codechampion-logo.png" layout="fill" />
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
            color: "#000000",
            marginTop: "50px",
            marginBottom: "20px",
          }}
        >
          ทำไมต้อง CodeChampion ?
        </Typography>
        <Box
          style={{
            fontFamily: "Kanit",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "20px",
            lineHeight: "250%",
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
      </div>
    </div>
  );
};

export { SecondPage };
