import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 380 }}>
      <CardActionArea sx={{ display: 'flex' }}>
        <CardMedia
          component="img"
          height="140"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQGmbblruMBw0B8a3h2ftqXhiUFjvchei1xA&usqp=CAU"
          alt="green iguana"
        />
        <CardContent sx={{ minWidth: 200, flexGrow: 2 }} >
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}