import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ModuleProps } from "@/types/ModuleProps";
import "./moduleCardStyles.css";

const ModuleCard = ({ title, description, imageSrc, link }: ModuleProps) => {
  return (
    // <Card>
    //   <CardMedia component="img" height="100" image={imageSrc} alt={title} />
    //   <CardContent>
    //     <Typography variant="h5" component="div">
    //       {title}
    //     </Typography>
    //     <Typography variant="body2" color="text.secondary">
    //       {description}
    //     </Typography>
    //     <Button href={link} variant="outlined">
    //       Learn More
    //     </Button>
    //   </CardContent>
    // </Card>

    <div className="module-card">
      <CardMedia
        className="card-thumbnail"
        component="img"
        height="100"
        image={imageSrc}
        alt={title}
      />

      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="card-btn-spacing">
          <button className="card-btn">
            <a href={link}>Learn more →</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModuleCard;
