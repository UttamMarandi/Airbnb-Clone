import React from "react";

const Footer = () => {
  return (
    <footer className="footer grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-32 max-w-7xl mx-auto">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Investors</p>
        <p>HotelTonight</p>
        <p>Careers</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Diversity & Belonging</p>
        <p>Accessibility</p>
        <p>Airbnb Associates</p>
        <p>Guest Referrals</p>
      </div>
      <div className="space-y-4  text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>Host your home</p>
        <p>Host an Online Experience</p>
        <p>Host an Experience</p>
        <p>Resource Centre</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Our COVID-19 Response</p>
        <p>Help Centre</p>
        <p>Cancellation options</p>
        <p>Neighbourhood Support</p>
      </div>
    </footer>
  );
};

export default Footer;
