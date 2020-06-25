import React, { useState, useEffect } from 'react';
import firebase from '../firebase';
import '../styles/AdsItem.css';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function AdsItem(props) {

  const [ad, setAd] = useState({});

  const currentId = props.match.params.id;

  useEffect(() => {
    firebase.firestore().collection('adds').doc(currentId).get().then(doc => {
      setAd(doc.data())

    })
  }, [currentId])

  console.log(ad)
  // const getDate = (timestamp) => {
  //     const start_date = moment.unix(timestamp).format("DD MMMM YYYY");
  // }

  // const timestamp = ad.start_date.seconds;
  // const start_date = moment.unix(timestamp).format("DD MMMM YYYY");

const getDate = (ad) => {
  if (ad.start_date) {
    return moment.unix(ad.start_date.seconds).format("DD/MM/YYYY")
  } else {
    return ''
  }
}  
  return (
    <main className='details-container'>
      <Card className='card'>
      <CardActionArea>
        <CardMedia
          className='card-media'
          image={ad.image}
          title="image de la region"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {ad.firstname} {ad.lastname}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <li><strong>Spécialité :</strong> {ad.specialty}</li>
            <li><strong>Date de début :</strong>{getDate(ad)}</li>
            <li><strong>Durée du remplacement :</strong> {ad.duration}</li>
            <li><strong>Département : </strong>{ad.departement}</li>
            <hr />
            <li>{ad.isPonctual ? 'Remplacement fixe' : 'Remplacement occasionnel'}</li>
            <li>{ad.accomodation ? 'Possibilité de logement' : 'Logement non-fourni'}</li>
            <li>{ad.atDomicile ? 'Consultation à domicile' : 'Consultation au cabinet'}</li>
            <li>{ad.content}</li>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Contacter {ad.firstname} {ad.lastname}
        </Button>
      </CardActions>
    </Card>
    </main>
  );
}