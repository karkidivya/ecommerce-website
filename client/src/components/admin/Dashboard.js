import React, { useState } from 'react';
import {Box, TextField, Button, Typography } from '@mui/material';
import AdminNav from './AdminNav'
import { Outlet } from 'react-router-dom';

const AdminHeader = () =>{
    return<>
        <Typography variant = 'h4' align ='center' sx = {{border: '2px solid grey'}}>
            Admin
        </Typography>
    </>
}

const Dashboard = () =>{
    return <>
        <Box>
            <AdminHeader />
            <Box sx = {{display : 'flex'}}>
                <AdminNav/>
                <Outlet />
            </Box>
        </Box>
    </>
};



export default Dashboard