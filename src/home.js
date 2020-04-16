import React, { useState, useEffect } from "react"; 
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Container, makeStyles, Menu } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import axios from "axios";

import SideMenu from './sidemenu'
import Content from './content'

function Home(props) {

    let [userData, setUserData] = useState([]);
  
    useEffect(() => {
      console.log('in useEffect');
      axios
        .get("http://www.mocky.io/v2/5e9858a23500007700c48152")
        .then(response => setUserData(response.data));
    }, []);

   // console.log("userData  : "+JSON.stringify(userData));

    let bankName;
    if(userData && userData.bankDetails){  
        bankName = userData.bankDetails.name;       
    }

    const useStyles = makeStyles(theme => ({
        root: {
          display: 'flex',         
          background:'#E2DFFE',
          height:'600px'
        },
      }));

    const classes = useStyles();


    return  (
                <Container maxWidth={false} className={classes.root} >
                    <Grid container spacing={1} >        
                        <Grid item xs={12} >
                        <AppBar position='static'>
                        <Toolbar>  
                                <Grid container spacing={3} > 
                                <Grid item xs={10} ><Typography variant="h8" className={classes.title}>Welcome to {bankName} Bank</Typography></Grid>
                                <Grid item xs={1} ><AccountCircleIcon/></Grid>
                                <Grid item xs={1} > 
                                        <Button variant="contained" size="small" color="secondary"  onClick={() => { props.checkAuthentication.signout(() => props.history.push("/"));}}>
                                            Logout
                                        </Button>  
                                    </Grid>
                                </Grid>                                       
                            </Toolbar>      
                        </AppBar>
                        </Grid>     
                        
                        <Grid item xs={12}>  
                            <Grid container spacing={2}>                           
                            <Grid item xs={3}> <SideMenu/></Grid>  
                            <Grid item xs={9}> <Content userData={userData}/></Grid> 
                        </Grid> 

                        </Grid>           
                    </Grid>
                </Container>
    )

  }

  export default Home