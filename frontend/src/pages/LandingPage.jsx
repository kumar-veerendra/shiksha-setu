import React from 'react';
import "../App.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from 'react';
import Footer from "../components/Footer"
import HomeContent from './HomeContent';

import HomeNavBar from './HomeNavBar';
import UpperNavbar from './UpperNavbar';

function LandingPage() {

    return (
        <>
            {/* <UpperNavbar /> */}
            <HomeNavBar />
            <HomeContent />          
            <Footer />
        </>
    );
}

export default LandingPage;
