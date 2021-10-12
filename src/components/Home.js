import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#FFCD47',
        height:'100vh',
    },
    title:{
        fontFamily:'Nunito',
        fontWeight:'300',
        fontSize:'210%',
        marginTop:'2%',
        color:'#212121',
    },
    btn:{
        fontFamily:'Nunito',
        fontWeight:'900',        
        width:'100%',
        color:'#FFCD47',
        backgroundColor:'#424242',
        borderRadius:'50px',
        alignItems:'center',
        marginTop:'4%',
        "&:hover":{
        color:'#424242',
        backgroundColor:'#FFCD47',
        }
    },
  }));

export default function Home() {
const classes = useStyles();
  return (
    <React.Fragment>
    <div className={classes.root}>
      <CssBaseline />      
      <Container fixed>        
        <Grid container direction="column" justifyContent="flex-end" alignItems="center">
            <Grid item xs={12} className={classes.title}>
                {/* <Paper >xs=12</Paper> */}
                <h1>Welcome </h1>
            </Grid>
            <Grid item xs={12}>
                {/* <Paper >xs=12</Paper> */}
                
            </Grid>
            <Grid item xs={12}>
                {/* <Paper >xs=12</Paper> */}
                <Button className={classes.btn} variant="contained">
                    Let's Start The Journey
                </Button>
            </Grid>
        </Grid>
      </Container>
      </div>
    </React.Fragment>
  );
}