import React from 'react';
import { useState } from 'react';

import TechNavbar from './TechNavbar';
import TechDashboard from './TechDashBoard';

function TeacherPage() {
    const [teacher, setTeacher] = useState({
        name: "Mrs. Sharma",
        email: "sharma@school.com",
        profilePic: "",
    });

    return ( 
        <div>
            {teacher && <TechNavbar teacher={teacher} setTeacher={setTeacher} />}
            <TechDashboard />
        </div>
     );
}

export default TeacherPage;