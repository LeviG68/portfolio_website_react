import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tetris from './Tetris';
import MetalMedia from './MetalMedia';
import FakeStore from './FakeStore';
import { Grid } from '@material-ui/core';
import Social from '../components/Social';

const useStyles = makeStyles({
    gridContainter: {
        paddingLeft: '0px',
        paddingTop: '40px',
        paddingBottom: '20px'
    },

  });

export default function Projects() {

    const classes = useStyles();
    return(
        <div className= "condiv">
            <Grid container spacing={2} className={classes.gridContainter}>
                <Grid item xs={4}>
                    <Tetris/>
                </Grid> 
                <Grid item xs={4}>
                    <MetalMedia/>
                </Grid> 
                <Grid item xs={4}>
                    <FakeStore/>
                </Grid> 
                
            <div className="social">
                <Social/>
            </div>
            </Grid>    
        </div> 
    );
}
