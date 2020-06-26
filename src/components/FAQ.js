import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import '../styles/FAQ.css';

const FAQ = (props) => {

  return (
    <main className='faq-container'>
      <h1 className='faq-title'>FAQ</h1>
      <ExpansionPanel style={{ width: '70%', margin: '20px auto' }}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{ fontWeight: 'bold' }}>Comment puis-je effectuer un remplacement?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Vous pouvez filtrer les annonces de remplacement grâce à une recherche avancée incluant la spécialité de médecine, le lieu géographique, la date de début et la durée de remplacement souhaitée.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel style={{ width: '70%', margin: '20px auto' }}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{ fontWeight: 'bold' }}>Est-ce que les démarches de remplacement sont inclues?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Vous pouvez filtrer les annonces de remplacement grâce à une recherche avancée incluant la spécialité de médecine, le lieu géographique, la date de début et la durée de remplacement souhaitée.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>


    </main>
  );
};

export default FAQ;