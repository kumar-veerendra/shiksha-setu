import React from 'react';
import Footer from '../../components/Footer';
import StudentDashboard from '../../Dashboard/StudentDashboard';
import StudentNavbar from '../../components/StudentNavbar';
import TeacherDashboard from '../../Dashboard/TeacherDashboard';
import TeacherNavbar from '../../components/TeacherNavbar';
import PublicDashboard from '../../Dashboard/PublicDashboard';
import PublicNavbar from '../../components/PublicNavbar';
function HomePage() {
  return (
    <div>
      {/* <PublicNavbar />
      <PublicDashboard />
      <Footer />
      <TeacherNavbar />
      <TeacherDashboard />
      <Footer /> */}
      <StudentNavbar />
      <StudentDashboard />
      <Footer />
    </div>
  );
}

export default HomePage;