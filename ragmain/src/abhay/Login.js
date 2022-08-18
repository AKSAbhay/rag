import React from "react";
import {Grid, Paper, Avatar, TextField, Button, Typography, Link} from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Login = ({handleChange}) =>{
    const paperStyle = {padding:20, height:'73vh', width:300, margin:"0 auto"}
    const avatarStyle = {backgroundColor:'#1bbd7e'}
    const btnStyle = {margin:'8px 0'}
    const initialValues = {
        username : '',
        password : '',
        remember : false
    }

    const validationSchema = Yup.object().shape({
        username : Yup.string().email('Please enter valid email').required('Required'),
        password : Yup.string().required('Required')
    })

    const onSubmit = (values, props) => {
        console.log(props);
        setTimeout(()=>{
            props.resetForm();
            props.setSubmitting(false);
        },2000)
        console.log(values);
    }

    
    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                <h2>Sign In</h2>
                </Grid>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props)=>(
                        <Form method="POST">
                            {/* {console.log(props)} */}
                        <Field as = {TextField} label='Username' name="username" 
                               placeholder="Enter username"
                               helperText={<ErrorMessage name="username"/>} 
                               fullWidth required/>
                        <Field as = {TextField} label='Password' name="password"
                               type='password' 
                               helperText={<ErrorMessage name="password"/>}
                               placeholder="Enter password" fullWidth required/>
                        <Field as = {FormControlLabel}
                              name="remember"
                              control={
                             <Checkbox
                             color="primary"
                        />
                    }
                      label="Remember Me"
                       />
                     <Button type='submit' color="primary" 
                            disabled = {props.isSubmitting}
                             style={btnStyle} 
                             fullWidth 
                             variant="contained">{props.isSubmitting ? "Loading" : "Sign In"}</Button>
                     </Form>
                    )}
                </Formik>
                <Typography>
                    <Link href='#'>
                        Forgot Password ?
                    </Link>
                </Typography>
                <Typography>
                    Do you have an account ?
                    <Link href='#' onClick = {()=>handleChange("event",1)}>
                        Sign Up
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login;