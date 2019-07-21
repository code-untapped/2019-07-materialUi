import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { Typography, Card, CardContent, CardHeader, } from '@material-ui/core';


const useStyles = makeStyles({
    bigAvatar: {
      margin: 10,
      width: 60,
      height: 60,
    },
    card: {
        minWidth: 275,
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
  });


const TopPerformerDetail = ({founder}) => {
    const classes = useStyles();
    console.log(founder);
    return(
        <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {founder.name}, {founder.age}
                    </Typography>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {founder.company}, {founder.role} | {founder.industry}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                    {founder.location}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {founder.social}
                    </Typography>
             </CardContent>
            </Card>
    );
};

export default TopPerformerDetail;