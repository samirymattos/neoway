import React from "react";
import * as style from "./styles";
import Parser from 'html-react-parser';
import { Grid } from "@mui/material";

export const NewsCard = ({article}) => {
  return(
    <Grid item>
      <style.ContainerCard>
        <style.Image src={article.urlToImage} />
        <style.WrapperContent p={1.5}>
          <style.NewsTitle>
            {article.title}
          </style.NewsTitle>
          <style.Author>
            {article.author}
          </style.Author>
          <style.Description>
            {Parser(article.description)}
          </style.Description>
        </style.WrapperContent>
      </style.ContainerCard>
    </Grid>
  )
}