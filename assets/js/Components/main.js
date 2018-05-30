import React from 'react';
import HeaderComponent from './header';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    content: {
        [theme.breakpoints.up("lg")]: {
            width: 1170
        }
    }
});

class MainComponent extends React.Component {
    

    render(){
        const { classes } = this.props;
        /*return(
            <Grid container justify="center">
                <Grid container
                      className={classes.content}>
                    
                </Grid>              
            </Grid>
        )*/
        return (
            <div>
                <HeaderComponent />  
            </div>
        )
    }
}

export default withStyles(styles)(MainComponent);