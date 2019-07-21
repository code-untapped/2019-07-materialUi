import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import {IconButton, Hidden} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles({
    card: {
        maxWidth: 500,
    },
    mapSty: {
        width: 30,
    },
    pinSty: {
        width: 10,
        height: 10
    }

});

class ImgMediaCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            setOpen: false,
            setVis: 'hidden'
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleClose = this.handleClose.bind(this)

    }
    //const [open, setOpen, setVis] = React.useState(false);

    // function handleClick() {
    //     setOpen(true);
    //     setVis(true);

    // }

    handleClick() {
        this.setState({
            open: true,
            setOpen: true,
            setVis: 'visible'
        })
    }

    handleClose(event, reason) {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({
            open: false,
            setOpen: false,
            setVis: 'hidden'
        })
    }

    render() {
        const { open, setOpen, setVis } = this.state;
        
        return (
            <div>
                <div>
                    <Snackbar
                        open={open}
                        onClose={this.handleClose}
                        TransitionComponent="g"
                        ContentProps={{
                            'aria-describedby': 'message-id',
                        }}
                        message={<span id="message-id">Company: dar-leone  Founder: Isatu Funna</span>}
                        action= {
                            [
                                <IconButton 
                                    color="inherit"
                                    onClick = {this.handleClose}
                                    key="close"
                                >
                                    <CloseIcon/>
                                </IconButton>
                            ]
                        }
                        //autoHideDuration={4000}
                    />
                </div>
                <div>
                    <Card className={useStyles.card}>
                        <CardActionArea>
                            <CardMedia
                                className={useStyles.mapSty}
                                component="img"
                                alt="Contemplative Reptile"
                                height="500"
                                image={require("./uk_map.svg")}
                                title="Contemplative Reptile"
                                onClick={this.handleClick}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    UK Map
                        </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    A map showing the BAME compaines in the UK
                        </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    {/* <div>
                        <img src={require("./map-marker.svg")} width={50} height={50} mode='fit' visibility={setVis} />
                    </div> */}
                </div>
            </div>
        );
    }
}

export default ImgMediaCard;