import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import api from "../service/api";
import { NewsCard } from "../components/cards/articles";

export const HomePage = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    api
      .get("/everything?q=Apple&from=2022-09-09&sortBy=popularity&apiKey=28663c03eff74d9a8cb0bf4d0df395dd&pageSize=100")
      .then((response) => setArticles(response.data.articles))
      .catch(error => console.log(error))
  },[])
  
  return (
    <Grid container flexDirection="column">
      <Typography>Noticias</Typography>
      <Grid container>
        <Box>{articles?.map((article, index) => <NewsCard key={index} article={article} />)}</Box>
      </Grid>
    </Grid>
  );
};
