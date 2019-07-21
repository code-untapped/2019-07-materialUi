import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { Typography, Card, CardContent, CardHeader, } from '@material-ui/core';

import TopPerformerDetail from './TopPerformerDetail';

let founder1 = {
    name: 'Wesley Harris',
    age: 25,
    role : 'CEO',
    company: 'Mob Security',
    social : 'www.linkedin.com/WesleyHarris',
    location: 'Lewisham',
    industry: 'Technology',
};

let founder2 = {
    name: 'Luffy Apom',
    age: 23,
    role : 'CEO',
    company: 'Resecurity',
    social : 'www.linkedin.com/Luffy',
    location: 'Peckham',
    industry: 'Retail',
};

let founder3 = {
    name: 'Sasuke Smith',
    age: 22,
    role : 'CEO',
    company: 'Vanifair',
    social : 'www.linkedin.com/Sasuke',
    location: 'Brixton',
    industry: 'Finance',
};

let founder4 = {
    name: 'Naruto Sa',
    age: 25,
    role : 'CEO',
    company: 'WeBuy',
    social : 'www.linkedin.com/NarutoUzimake',
    location: 'Cantenbury',
    industry: 'Marketing',
};

const useStyles = makeStyles({
    bigAvatar: {
      margin: 100,
      width: 100,
      height: 100,
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


export default class TopPerformers extends Component {
    state = { founder: null };

    onAvatarClick(pickedFounder) {    
        this.setState({ founder: pickedFounder });
        console.log(pickedFounder);
    };

    render() {
        const { founder } = this.state;
        return (
        
            <div>
                <Card className={useStyles.card}>
                    <CardContent>
                        <CardHeader
                            title="Top performers"
                         />    
                    <Grid container justify="center" alignItems="center">
                    <Avatar onClick={() => this.onAvatarClick(founder1)} alt="Remy Sharp" src="https://randomuser.me/api/portraits/men/91.jpg" className={useStyles.bigAvatar} />
                    <Avatar onClick={() => this.onAvatarClick(founder2)} alt="Remy Sharp" src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82" className={useStyles.bigAvatar} />
                    <Avatar onClick={ () => this.onAvatarClick(founder3)} alt="Remy Sharp" src="https://pbs.twimg.com/profile_images/953000038967468033/n4Ngwvi7.jpg" className={useStyles.bigAvatar} />
                    <Avatar onClick={ () => this.onAvatarClick(founder4)} alt="Remy Sharp" src="https://images.unsplash.com/photo-1506085452766-c330853bea50?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3e378252a934e660f231666b51bd269a" className={useStyles.bigAvatar} />
                    </Grid>
                    </CardContent>
                </Card>
                {founder && <TopPerformerDetail founder={founder} />}
                
            </div>
        );  

    }

}
