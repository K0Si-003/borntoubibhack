import React, { useState } from 'react';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import pictoDate from "../images/date.png";
import pictoDuration from '../images/duration.png';
import pictoReccurent from '../images/reccurent.png'


const FAQ = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <main>
            <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
           
                <Card>
                    
                        Anim pariatur cliche reprehenderit,
                        enim eiusmod high life accusamus terry richardson ad squid. Nihil
                        anim keffiyeh helvetica, craft beer labore wes anderson cred
                        nesciunt sapiente ea proident.
                   
                </Card>
        
        </main>
    );
};

export default FAQ;