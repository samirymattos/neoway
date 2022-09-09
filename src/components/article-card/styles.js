import { Box, Button, Link, Typography } from "@mui/material";
import { styled } from "@mui/system";
import palette from "../../theme/palette";

export const ContainerCard = styled(Button)({
  display: "flex",
  flexDirection: "column",
  padding: 0,
  color: palette.black,
  maxWidth: "300px",
  borderRadius: "10px",
  overflow: "hidden",
  boxShadow: "-1px 7px 14px 5px rgba(87,53,219,0.2)",
  fontFamily: "Roboto",
  textTransform: "inherit"
});

export const Image = styled("img")({
  width: "100%",
  height: "150px",
  objectFit: "cover"
});

export const ImageModal = styled("img")({
  width: "100%",
  objectFit: "cover",
  borderRadius: "10px",
});

export const WrapperContent = styled(Box)({
  height: "220px"
})

export const NewsTitle = styled(Typography)({
  fontWeight: 900,
  fontSize: "16px",
  textAlign: "center",
  lineHeight: "18px",
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  height: "calc(18px * 3)"
});

export const NewsTitleModal = styled(Typography)({
  fontWeight: 900,
  fontSize: "20px",
  textAlign: "center",
  lineHeight: "22px",
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  height: "calc(22px * 3)"
});

export const Author = styled(Typography)({
  fontWeight: 900,
  fontSize: "10px",
  textAlign: "right",
  marginBottom: "12px",
  color: palette.placeholder
});

export const AuthorModal = styled(Typography)({
  fontWeight: 900,
  fontSize: "14px",
  textAlign: "right",
  marginBottom: "16px",
  color: palette.placeholder
});

export const DateModal = styled(Typography)({
  fontWeight: 900,
  fontSize: "14px",
  textAlign: "right",
  marginBottom: "16px",
  color: palette.grey
});

export const Description = styled(Box)({
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "16px",
  textAlign: "left",
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  maxHeight: "calc(16px * 15)"
});

export const ContentModal = styled(Box)({
  fontWeight: 300,
  fontSize: "16px",
  lineHeight: "18px",
  textAlign: "left",
});

export const UrlArticle = styled(Link)({
  fontWeight: 300,
  fontSize: "16px",
  lineHeight: "18px",
  textAlign: "left",
  color: palette.title,
});

export const ArticleModal = styled(Box)({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: palette.white,
    boxShadow: "-1px 7px 14px 5px rgba(87,53,219,0.5)",
    padding: "16px",
    borderRadius: "15px",
    overflow: "auto"
})