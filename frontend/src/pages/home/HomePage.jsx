import React from 'react';
import Banner from './Banner';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';



function HomePage() {
    const slides = [
    "/Banner1.jpeg",
    "/Banner2.jpg"
  ];

    const containerStyles = {
        width: '100%',
        height: '700px',
    }

    return ( 
        <div>
            <Navbar />
            <div style={containerStyles}>
                <Banner slides={slides}/>
            </div>
            <div>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore blanditiis harum consequatur voluptas odio soluta provident assumenda magnam ullam mollitia, cum, dolorum expedita perspiciatis enim doloribus, illum placeat asperiores corporis?
                </p>
            </div>
            <Footer />
        </div>
     );
}

export default HomePage;