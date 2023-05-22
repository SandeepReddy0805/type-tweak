import React from 'react'
import Navbar from './Navbar';
import HeroBanner from './HeroBanner';
function LandingPage() {
    return (
      <>
        <div className="bg-gradient-to-b from-[#141e30] to bg-[#0077ff] h-screen">
        <Navbar/>
        <HeroBanner/>
        </div>
      </>
    );
}

export default LandingPage