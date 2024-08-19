import React from "react";
import { ArticleProps } from "@/types/ArticleProps";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { securityArticles } from "src/constants";

const ArticleCard = ({
  title,
  description,
  imageSrc,
  author,
  date,
  content,
}: ArticleProps) => {
  return (
    <div>
      <Card className="max-w-3xl mx-auto mb-7">
        <CardMedia component="img" height="100" image={imageSrc} alt={title} />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {author} <span> {date}</span>
          </Typography>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ArticleCard;
