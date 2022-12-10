import { Container, Divider, Stack, styled, Typography } from "@mui/material";

export const BulletPoint = styled("div")(() => ({
  display: "inline-block",
  width: "7px",
  height: "7px",
  backgroundColor: "#000000",
  borderRadius: "50vw",
  marginRight: "10px",
  marginBottom: "3px",
}));

export const BulletText = styled("div")(() => ({
  display: "inline",
  fontFamily: "Kanit",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "20px",
  lineHeight: "250%",
  color: "#000000",
}));
