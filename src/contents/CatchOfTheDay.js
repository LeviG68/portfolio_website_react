import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Cotd from '../img/CatchOfTheDaypic.png';
    

const useStyles = makeStyles({
  root: {
    maxWidth: 280,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Catch of the Day"
          height= "160"
          image={Cotd}
          title="Catch of the Day"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            Catch of the Day 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Project built with React. This site a user can login and make edit to inventory with what products are for sale, changes to market prices, and what images and descriptions go with those products.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href="https://cotd-jcfato9q5-glendenninglevi-gmailcom.vercel.app/">
          Link to Site
        </Button>
      </CardActions>
    </Card>
  );
}