import React from 'react';
import StuNavbar from './stuNavbar';
import StuDashboard from './StuDashBoard';

function StudentPage() {
    return ( 
        <div>
            <StuNavbar/>
            <StuDashboard />
        </div>
     );
}

export default StudentPage;