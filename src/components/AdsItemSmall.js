import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../styles/AdsItemSmall.css';
import { Link } from 'react-router-dom'

export default function AdsItemSmall( {ad} ) {

console.log(ad)
  return (
    <Card className='card'>
      <CardActionArea>
        <CardMedia
          className='card-media'
          image="http://us.media.france.fr/sites/default/files/styles/horizontal/public/image/press_release/StEtienne1-Evelyne-Deveaux---Saint-Etienne-Tourisme-et-Congres.jpg?itok=HsqTUawS"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {ad.firstname}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {ad.content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/annonces/${ad.id}`} >
        <Button size="small" color="primary">
          Voir l'annonce
        </Button>
        </Link>
        <Button size="small" color="primary">
          Voir carte
        </Button>
      </CardActions>
    </Card>
  );
}
