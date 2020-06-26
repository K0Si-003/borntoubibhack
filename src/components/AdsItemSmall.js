import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import pictoDate from "../images/date.png";
import pictoDuration from '../images/duration.png';
import pictoReccurent from '../images/reccurent.png';
import "../styles/AdsItemSmall.css";
import { Link } from "react-router-dom";
import moment from "moment";


export default function AdsItemSmall({ ad }) {
  const timestamp = ad.start_date.seconds;
  const start_date = moment.unix(timestamp).format("DD MMMM YYYY");

  return (
    <Card className="card">
      <CardActionArea>
        <CardMedia
          className="card-media"
          image={`${ad.image}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <p>
              {ad.firstname} {ad.lastname}{" "}
            </p>
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            {ad.specialty}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {ad.departement}
          </Typography>
          <div className="ad-info">
            <div className="start-date">
              <span
                className="picto-container"
                style={{ backgroundImage: `url(${pictoDate})` }}
              />
              <p>Date de début : {start_date}</p>
            </div>
            <div className='ad-duration'>
            <span
                className="picto-container"
                style={{ backgroundImage: `url(${pictoDuration})` }}
              />
              <p>Durée : {ad.duration}</p>
            </div>
            <div className='ad-reccurent'>
            <span
                className="picto-container"
                style={{ backgroundImage: `url(${pictoReccurent})` }}
              />
              <p>{ad.isPonctual ? "Ponctuel" : "Réccurent"}</p>
            </div>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions className = 'CardActions '>
          <Button size="small" color="primary">
          <Link to={`/annonces/${ad.id}`} className='link-ad' target='_blank'>
            Voir les détails de l'annonce
            </Link>
          </Button>
      </CardActions>
    </Card>
  );
}
