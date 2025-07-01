import React from 'react';
import { Outlet } from 'react-router-dom';

const AdvocateDashboardLayout = () => {
    return (
        <div>
            Welcome Advocate
            <Outlet/>
        </div>
    );
};

export default AdvocateDashboardLayout;