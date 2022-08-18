import React, {useState} from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Login from '../abhay/Login';
import Signup from '../abhay/Signup';
import photo from '../images/house.jpg';
import { Avatar, Button, Grid, Paper, TextField, Typography } from "@material-ui/core";

const SignInOutContainer = () => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    
      const paperStyle = {width:340, margin:'20px auto'}
      function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }
      
    return (
        <div>
          <Grid container direction='row' justifyContent='center' alignItems='center'>
          <Grid item xs={8}>
          <Box >
          <img src={photo}  alt="house_pic" width="870px" height="530px"/>
          </Box>
          </Grid>
            <Grid item xs={4}>
            <Paper elevation={20} style={paperStyle}>
                <Tabs
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                    aria-label="disabled tabs example"
                >
                    <Tab label="Sigin" />
                    <Tab label="SignUp" />
                </Tabs>
                <TabPanel value={value} index={0}>
                <Login handleChange={handleChange}/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                <Signup/>
                </TabPanel>
            </Paper>
            </Grid>
          </Grid>
        </div>
    )
}

export default SignInOutContainer;