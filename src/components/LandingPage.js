import React from 'react'
import Navbar from './Navbar';
import HeroBanner from './HeroBanner';
import Scroll from './Scroll';
function LandingPage() {
    return (
      <>
        <div className="bg-gradient-to-b from-[#0C0C0C] to bg-[#4834D4] h-screen">
        <Navbar/>
        <HeroBanner/>
        <Scroll/>
        </div>
      </>
    );
}

export default LandingPage