import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import React from "react";

export const ToggleButtonCustom = (props) => {
  return (
    <ToggleButtonGroup {...props} value={props.value} color="primary" exclusive>
      <ToggleButton value="popularity">Popularidade</ToggleButton>
      <ToggleButton value="relevancy">Relevância</ToggleButton>
      <ToggleButton value="publishedAt">Recentes</ToggleButton>
    </ToggleButtonGroup>
  )
}