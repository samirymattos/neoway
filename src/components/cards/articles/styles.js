import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import palette from "../../../theme/palette";

export const ContainerCard = styled(Grid)({
  maxWidth: "300px",
  borderRadius: "10px",
  overflow: "hidden",
  boxShadow: "-1px 7px 14px 5px rgba(87,53,219,0.69)",
  margin: "10px",
  fontFamily: "Roboto",
});

export const Image = styled("img")({
  maxWidth: "100%"
});

export const WrapperContent = styled(Box)({
  height: "220px"
})

export const NewsTitle = styled(Typography)({
  fontWeight: 900,
  fontSize: "16px",
  textAlign: "center",
});

export const Author = styled(Typography)({
  fontWeight: 900,
  fontSize: "10px",
  textAlign: "right",
  marginBottom: "12px",
  color: palette.placeholder
});

export const Description = styled(Typography)({
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "16px",
  textAlign: "left",
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  maxHeight: "calc(16px * 15)"
});