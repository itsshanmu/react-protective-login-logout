import React, { useState, useEffect } from "react"; 
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Container, makeStyles } from '@material-ui/core';
import { Link } from '@material-ui/core';


function Content(props) {

    let userdata = {};
    if(props.userData)
     userdata = props.userData;

    const useStyles = makeStyles(theme => ({
        root: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background:'#E2DFFE',
          
        },
      }));

    const classes = useStyles();

  
    return  (
            <div>
                <Typography variant="h8">Saving Accounts</Typography>
                <Box border={1} p={2} m={2}> 
                <Grid container spacing={2}  >
                    <Grid item xs={4}> <Typography variant="h8" >Account Number</Typography></Grid>  
                    <Grid item xs={4}> <Typography variant="h8" >Branch</Typography></Grid>  
                    <Grid item xs={4}> <Typography variant="h8" >Amount</Typography></Grid>  
                    </Grid>
                    <Grid container spacing={2}>
                    <Grid item xs={4}> <Typography variant="h8" >{userdata && userdata.accountDetails && userdata.accountDetails.accNo}</Typography></Grid>  
                    <Grid item xs={4}> <Typography variant="h8" >{userdata && userdata.bankDetails && userdata.bankDetails.branch}</Typography></Grid>  
                    <Grid item xs={4}> <Typography variant="h8" >{userdata && userdata.accountDetails && userdata.accountDetails.amount}</Typography></Grid>  
                    </Grid>
                </Box> 
                <Typography variant="h8" m={2}>Deposits</Typography>
                <Box border={1} p={2} m={2}> 
                <Grid container spacing={2}  >
                    <Grid item xs={4}> <Typography variant="h8" >Fixed Deposits</Typography></Grid>  
                    <Grid item xs={4}> <Typography variant="h8" >Recurrig Deposits</Typography></Grid>  
                    <Grid item xs={4}> <Typography variant="h8" ></Typography></Grid>  
                    </Grid>
                    <Grid container spacing={2} >
                    <Grid item xs={4}> <Typography variant="h8" >{userdata && userdata.depositDetails && userdata.depositDetails.fd}</Typography></Grid>  
                    <Grid item xs={4}> <Typography variant="h8" >{userdata && userdata.depositDetails && userdata.depositDetails.rd}</Typography></Grid>  
                    <Grid item xs={4}> <Link href="#"> View All Deposits</Link></Grid>  
                    </Grid>
                </Box> 
                </div>
        
           )

  }

  export default Content