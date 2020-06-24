import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../styles/AdsItemSmall.css';
import firebase from '../firebase';

export default function AdsItemSmall() {

  const ads = firebase.firestore().collection('adds')
  console.log(ads)

  return (
    <Card className='card'>
      <CardActionArea>
        <CardMedia
          className='card-media'
          image="http://us.media.france.fr/sites/default/files/styles/horizontal/public/image/press_release/StEtienne1-Evelyne-Deveaux---Saint-Etienne-Tourisme-et-Congres.jpg?itok=HsqTUawS"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
