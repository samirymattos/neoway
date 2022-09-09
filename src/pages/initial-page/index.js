import React, { useEffect, useState } from "react";
import { Box, Button, ButtonGroup, Grid, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import api from "../../service/api";
import { ArticleCard } from "../../components/article-card";
import * as style from "./styles";
import { LoadingGlobal } from "../../components/loading";
import { ToggleButtonCustom } from "../../components/toggle-button";

export const InitialPage = () => {
  const [articles, setArticles] = useState([]);
  const [sort, setSort] = useState("popularity");
  const [isLoading, setIsLoading] = useState(true);
  const handleSort = (event, newSort) => {
    setSort(newSort)
  }

  useEffect(() => {
    setIsLoading(true);
    api
      .get("/everything?q=Apple&from=2022-09-09&sortBy=" + sort + "&apiKey=28663c03eff74d9a8cb0bf4d0df395dd&pageSize=100")
      .then((response) => setArticles(response.data.articles))
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false))
  },[sort])
  
  return (
    <Grid container flexDirection="column" maxWidth="100vw" overflow="hidden">
      {isLoading && <LoadingGlobal />}
      <style.Title>Notícias</style.Title>
      <Grid container mb={3} justifyContent="center">
        <ToggleButtonCustom value={sort} onChange={handleSort}/>
      </Grid>
      <Grid container spacing={4} justifyContent="center">
        {articles?.map((article, index) => <ArticleCard key={index} article={article} />)}
      </Grid>
    </Grid>
  );
};
