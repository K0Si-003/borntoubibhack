import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import '../styles/favorites.css'

const FavoriteSearch = (props) => {
  const [searches, setSearches] = useState([])

  useEffect(() => {
    setSearches(JSON.parse(localStorage.getItem('localSearch')) || []);
  }, [])

  return (
    <main className='fav-container'>
      <h1 className='fav-title'>Mes recherches</h1>
      {searches.map((search, index) => {
        return (
          <Card className='card-search'>
            <CardContent>
              <Typography color="textPrimary" gutterBottom>
                Recherche {index + 1}
              </Typography>
              <Typography variant="h5" component="h2">
              </Typography>
              <Typography color="textSecondary">
                {search.place}
              </Typography>
              <Typography color="textSecondary">
                {search.specialty}
              </Typography>
              <Typography color="textSecondary">
                {search.duration}
              </Typography>
              <Typography color="textSecondary">
                {search.date}
              </Typography>

            </CardContent>
            <CardActions style={{ textAlign: 'center' }}>
              <Link to="/annonces/search">
                <Button size="small">Lancer ma recherche</Button>
              </Link>
            </CardActions>
          </Card>
        )
      })}

    </main>
  );
};

export default FavoriteSearch;