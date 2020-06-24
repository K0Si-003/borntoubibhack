import React from 'react';
import '../styles/Footer.css'
import { Link } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import FaceIcon from '@material-ui/icons/Face';
// import './Footer';

const pathMap = [
  '/',
  '/mes-recherches',
  '/FAQ'
];
export default function Footer () {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <footer>
      <BottomNavigation style={{ backgroundColor: '#0596DE' }} value={value} onChange={handleChange} showLabels>
        <BottomNavigationAction style={{ color: 'white' }} label='Accueil' value='accueil' icon={<HomeIcon />} component={Link} to={pathMap[0]} />
        <BottomNavigationAction style={{ color: 'white' }} label='Mes recherches' value='mes recherches' icon={<FaceIcon />} component={Link} to={pathMap[1]} />
        <BottomNavigationAction style={{color: 'white' }} label='FAQ' value='faq' icon={<InfoIcon />} component={Link} to={pathMap[2]} />
      </BottomNavigation>
    </footer>
  );
}
