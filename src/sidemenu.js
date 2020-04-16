import React, { useState, useEffect } from "react"; 
import Typography from '@material-ui/core/Typography';
import { Container, makeStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';


function SideMenu(props) {

    const useStyles = makeStyles(theme => ({
        root: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background:'#E2DFFE',
          
        },
      }));

    const classes = useStyles();

    const [expand1, setExpandable1] = React.useState(true);
    const [expand2, setExpandable2] = React.useState(true);
  
    const handleClick = () => {
      setExpandable1(!expand1);
    };
  
    const handleClick2 = () => {
      setExpandable2(!expand2);
    };

  
    return  (
         
                  <div>                  
                        <Typography variant="h8" className={classes.title}>Account Summary</Typography> 
                        <List>
                            <ListItem button onClick={handleClick}>       
                                <ListItemText primary="Savings" />
                                {expand1 ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>
                            <Collapse in={expand1} timeout="auto" unmountOnExit>
                                <List >
                                <ListItem >                            
                                    <ListItemText primary="Open FD" />
                                </ListItem>
                                <ListItem >                            
                                    <ListItemText primary="Open RD" />
                                </ListItem>
                                <ListItem >                            
                                    <ListItemText primary="View Deposits" />
                                </ListItem>
                                </List>
                            </Collapse>
                            </List>
                        <List>
                            <ListItem button onClick={handleClick2}>       
                                <ListItemText primary="Funds Transfer" />
                                {expand2 ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>
                            <Collapse in={expand2} timeout="auto" >
                                <List >
                                <ListItem >
                                
                                    <ListItemText primary="View Payee" />
                                </ListItem>
                                <ListItem >
                                
                                    <ListItemText primary="Transfer" />
                                </ListItem>
                                </List>
                            </Collapse>
                            </List>
                       </div>
           )
    
  }

  export default SideMenu