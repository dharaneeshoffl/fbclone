import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";


export default function Post() {
  return (
    <Card sx={{ margin:5 }}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor:"red" }} aria-label="recipe">
          R
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVert />
        </IconButton>
      }
      title="Name Is John"
      subheader="September 14, 2016"
    />
    <CardMedia
      component="img"
      height="20%"
      image="https://gumlet.assettype.com/outlooktraveller%2F2023-09%2F0b3efb56-96d6-4eff-94ae-d1ad69e34036%2Fshutterstock_1212358024.jpg?format=auto"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
      Kodaikanal, often called the "Princess of Hills," is a highly sought-after hill station in Tamil Nadu, known for its serene beauty. It sits at an elevation of around 7,000 feet above sea level and was established as a destination by British officials and Christian missionaries in 1845. However, references to this picturesque hill station date back to ancient Sangam literature.
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
      <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite  sx={{color:"red"}}/>} />
       
      </IconButton>
      <IconButton aria-label="share">
        <Share />
      </IconButton>
      
    </CardActions>
    
  </Card>
  );
};

