import React from "react";

import { WrapperLoading } from "./styles";
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';


export const LoadingGlobal = () => {
  return (
    <WrapperLoading container>
      <Stack direction="row">
        <CircularProgress color="primary"/>
      </Stack>
    </WrapperLoading>
  )
}