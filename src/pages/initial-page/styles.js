import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import palette from "../../theme/palette";


export const Title = styled(Typography)({
  textAlign: "center",
  margin: "20px 0 40px 0",
  fontWeight: "900",
  fontSize: "32px",
  color: palette.title
})