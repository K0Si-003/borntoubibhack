import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import pictoDate from "../images/date.png";
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
          image="http://us.media.france.fr/sites/default/files/styles/horizontal/public/image/press_release/StEtienne1-Evelyne-Deveaux---Saint-Etienne-Tourisme-et-Congres.jpg?itok=HsqTUawS"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <p>{ad.firstname} {ad.lastname} </p>
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
            <p>
              Durée : {ad.duration} {ad.unit === "day" ? "jours" : "mois"}
            </p>
  <p>{ad.isPonctual ? 'Ponctuel' : 'Réccurent'}</p>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/annonces/${ad.id}`}>
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
