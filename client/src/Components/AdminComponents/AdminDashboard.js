import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../UserManagement/AuthContext';

const AdminDashboard = () => {
    const [dashboardContent, setDashboardContent] = useState('');
    const {authUser} = useAuth();

    useEffect(() => {
        axios.get('https://ojt-backend.azurewebsites.net/admin/dashboard', {
            headers: {
                Authorization: `Bearer ${authUser.accessToken}`,
            },
        })
        .then(response => {
            setDashboardContent(response.data);
        })
        .catch(error => {
            console.error("There was an error fetching the dashboard content!", error);
        });
    }, [authUser.accessToken]);

    return (
        <div dangerouslySetInnerHTML={{ __html: dashboardContent }} />
    );
};

export default AdminDashboard;
