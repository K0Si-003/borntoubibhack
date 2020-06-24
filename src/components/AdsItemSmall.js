import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../styles/AdsItemSmall.css';

export default function AdsItemSmall( {ad} ) {

/* const adddd = {
  accomodation: true,
atDomicile: false,
content: "Bonjour, je cherche un remplaçant pour mon cabinet d'ostéopathie pour deux jours, mardi 29 juin 2020 et mercredi 30 juin 2020. Contrat à discuter. Possibilité d'être logé à proximité. ",
duration: 2,
firstname: "Pierre",
id: 1,
image: "http://us.media.france.fr/sites/default/files/styles/horizontal/public/image/press_release/StEtienne1-Evelyne-Deveaux---Saint-Etienne-Tourisme-et-Congres.jpg?itok=HsqTUawS",
isPonctual: true,
lastname: "Genthon",
localisation: {Rc: 45.459843, Ac: 4.3794591},
specialty: "ostheopathie",
start_date: {seconds: 1593410400, nanoseconds: 0},
unit: "jours"
}
 */
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
