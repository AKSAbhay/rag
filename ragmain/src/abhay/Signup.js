import { Avatar, Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import React, {useEffect, useState} from "react";
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import { FormHelperText } from "@material-ui/core";
import * as Yup from 'yup';
// import {Navigate, useNavigate, useParams} from 'react-router-dom';
// import TermsList from "./TermsList";

const Signup = () =>{
    const paperStyle = { padding:20, width:300, margin:'0 auto' };
    const headerStyle = { margin:0 };
    const avatarStyle = { backgroundColor:'#1bbd7e' };
    const marginTop = { marginTop:5 };
    
    const initialValues = {
          name : '',
          email : '',
          gender : '',
          phone : '',
          password : '',
          confirmPassword : '',
          termsAndCondition :false,
          termsConditionValue: 1
    };

    const validationSchema = Yup.object().shape({
          name : Yup.string().min(3, "its too short !").required("Required"),
          email : Yup.string().email("Enter the valid email").required("Required"),
          gender : Yup.string().oneOf(["male","female"],"Required").required("Required"),
          phone :Yup.number().typeError("Please provide phone number").required("Required"),
          password : Yup.string().min(8, "Password length should be 8").required("Required"),
          confirmPassword : Yup.string().oneOf([Yup.ref('password')],'Password not matched').required("Required"),
          termsAndCondition : Yup.string().oneOf(["true"],"Please accept T&C").required("Required")
    });
    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><AddCircleOutlineOutlinedIcon/></Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant="caption" gutterBottom>
                        Please fill this form to create an account
                    </Typography>
                </Grid>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} 
                            enableReinitialize={true}>
                        {(props)=> (
                            <Form>
                            <Field as = {TextField} 
                                   fullWidth 
                                   label='Name' 
                                   name='name'
                                   helperText={<ErrorMessage name='name'/>}
                                   placeholder="Enter your name"/>
                            <Field as = {TextField} 
                                   fullWidth 
                                   label='Email'
                                   name='email'
                                   helperText={<ErrorMessage name='email'/>} 
                                   placeholder="Enter your email"/>
                            <FormControl 
                                   component="fieldset" 
                                   style={marginTop}>
                            <FormLabel component="legend">Gender</FormLabel>
                            <Field as = {RadioGroup} 
                                   aria-label="gender" 
                                   name='gender' 
                                   style={{display:'initial'}}>
                            <FormControlLabel value="female" 
                                              control={<Radio />} 
                                              label="Female" />
                            <FormControlLabel value="male" 
                                              control={<Radio />} 
                                              label="Male" />
                            </Field>
                            </FormControl>
                            <FormHelperText><ErrorMessage name='gender'/></FormHelperText>
                            <Field as = {TextField} 
                                   fullWidth 
                                   label='Mobile' 
                                   name='phone' 
                                   helperText={<ErrorMessage name='phone'/>} 
                                   placeholder="Enter your Number"/>
                            <Field as = {TextField} 
                                   fullWidth 
                                   label='Password' 
                                   name='password'
                                   type='password' 
                                   helperText={<ErrorMessage name='password'/>} 
                                   placeholder="Enter your password"/>
                            <Field as = {TextField} 
                                   fullWidth label='Confirm Password' 
                                   name='confirmPassword'
                                   helperText={<ErrorMessage name='confirmPassword'/>} 
                                   type='password'/>
                            <FormControlLabel
                                   control={<Field as = {Checkbox}  
                                   name='termsAndCondition'
                                   />}
                                   label="I accept the terms and conditions"
                            />
                           
                            <FormHelperText><ErrorMessage name='termsAndCondition'/></FormHelperText>
                            <Button type='submit' 
                                    variant="contained" 
                                    color="primary"
                                    disabled={props.isSubmitting}>
                                    {props.isSubmitting ? "Loading" : "Sign Up"}
                                    </Button>
                            </Form>
                        )}
                    </Formik>
                    
            </Paper>
        </Grid>
    )
}

export default Signup;