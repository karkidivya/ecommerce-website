import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import AdminNav from './AdminNav'

const AdminHeader = () =>{
    return<>
        <Typography variant = 'h4' align ='center'>
            Admin
        </Typography>
    </>
}

const Dashboard = () =>{
    return <>
        <AdminHeader />
        <AdminNav/>
    </>
};



export default Dashboard