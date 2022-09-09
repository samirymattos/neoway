
import { styled } from "@mui/system";
import { Grid } from "@mui/material";

export const WrapperLoading = styled(Grid)({
  display: "flex",
  position: "fixed",
  top: "0",
  left: "0",
  width: "100vw",
  height: "100vh",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  zIndex: "9999",

  "& .MuiCircularProgress-indeterminate": {
    width: "100px !important",
    height: "100px !important",
    
    ["@media (max-width: 768px)"]: {
      width: "50px !important",
      height: "50px !important",
    },
  },

  "& .MuiCircularProgress-svg": {
    width: "100px",
    
    ["@media (max-width: 768px)"]: {
      width: "50px !important",
    },
  },
});