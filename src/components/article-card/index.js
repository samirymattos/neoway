import React, { useEffect, useState } from "react";
import * as style from "./styles";
import Parser from 'html-react-parser';
import { Button, Grid, IconButton, Modal, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import palette from "../../theme/palette";


export const ArticleCard = ({article}) => {
  const [open, setOpen] = useState(false);
  const [dateFormated, setDateFormated] = useState(false);

  useEffect(() => {
    const date = new Date(article.publishedAt);
    setDateFormated(new Intl.DateTimeFormat("pt-Br").format(date));
  },[])
  
  const Article = (
    <Modal open={open}>
      <style.ArticleModal>
        <Grid container justifyContent="flex-end">
          <IconButton onClick={() => setOpen(false)} color="secondary">
            <CloseIcon />
          </IconButton>
        </Grid>
        <style.ImageModal src={article.urlToImage} />
        <style.WrapperContent p={1.5}>
          <style.NewsTitleModal>
            {article.title}
          </style.NewsTitleModal>
          <Grid container flexDirection="row" justifyContent="space-between">
            <style.AuthorModal>
              {article.author}
            </style.AuthorModal>
            <style.DateModal>
              {dateFormated}
            </style.DateModal>
          </Grid>
          <style.ContentModal>
            {Parser(article.content)}
          </style.ContentModal>
          <Grid container justifyContent="flex-end">
            <style.UrlArticle href={article.url}>
              página do artigo
            </style.UrlArticle>
          </Grid>
        </style.WrapperContent>
      </style.ArticleModal>
    </Modal>
  )

  return(
    <Grid item id={article.source.id}>
      {open && Article}
      <style.ContainerCard onClick={() => setOpen(true)}>
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