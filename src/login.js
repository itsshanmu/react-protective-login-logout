import React from "react"; 
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import { Formik} from 'formik';
import * as Yup from 'yup';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";


function Login(props) {

    const useStyles = makeStyles(theme => ({
        root: {         
          background:'#E2DFFE'          
        },
      }));
    
      const classes = useStyles();

    let history = useHistory();
    let location = useLocation();   


    let { from } = location.state || { from: { pathname: "/" } };
    let loginFlag = false;
  
    let handleLogin = (data) => {  
      console.log('login');
      loginFlag = true;      
      props.checkAuthentication.authenticate(() => {
        history.replace(from);
      });      
    };

  
    return (
                <Grid container style={{backgroundColor: '#EBE9FF',alignItems:'center',height:"750px"}}>

                <Grid item xs={4}></Grid>
                <Grid item xs={4} className={classes.root}>
                <Box borderRadius={10} height={280} bgcolor='#FCE4E4'>
                            
                            <Grid container>
                              <Formik initialValues={{userid: '', password: '' }}                                   

                                  validationSchema={Yup.object().shape({                  
                                  userid: Yup.string().required('Please Enter Your User ID'),
                                  password: Yup.string().required('Please Enter Password'),
                                  })}
                              >
                                {(props) => {
                                const {
                                    values,
                                    touched,
                                    errors,                                   
                                    isSubmitting,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit,
                                    handleReset,
                                } = props;


                                //console.log('props '+JSON.stringify(props));
                                if(props.values.userid && props.values.password && props.isSubmitting && !loginFlag){
                                    handleLogin(props)
                                }

                                return (
                                        <form>

                                        <Grid container alignItems='center'>

                                        <Grid item xs={12} alignItems='center'> <Typography  variant="h6" className={classes.title}>Login here..</Typography>   </Grid>
                                        <Grid item xs={12} p={2} >
                                        <TextField
                                        error={errors.userid && touched.userid}
                                            label="User ID"
                                            name="userid"
                                            className={classes.textField}
                                            value={values.userid}
                                            onChange={handleChange}
                                            onBlur={handleBlur}                        
                                            helperText={(errors.userid && touched.userid) && errors.userid}
                                            margin="normal"  variant='outlined'
                                            style ={{width: '80%',textAlign:'center'}}
                                        />
                                        </Grid>
                                        <Grid item xs={12}>
                                        <TextField
                                        error={errors.password && touched.password}
                                            label="Password"
                                            name="password"
                                            type="password"
                                            className={classes.textField}
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            helperText={(errors.password && touched.password) && errors.password}
                                            margin="normal"  variant='outlined'
                                            style ={{width: '80%'}}
                                        />                                    
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button variant="contained" size="small" color="primary"  onClick={handleSubmit}> Login</Button>
                                            <Button type="reset" variant="contained" size="small" color="secondary" onClick={handleReset} >Reset</Button>
                                            
                                        </Grid></Grid>
                                        </form>
                                );
                                }}
                            </Formik>
                        </Grid>

                    </Box>
                </Grid>                 
            <Grid item xs={4}></Grid>            
            </Grid>

   )
}

  export default Login