import React from 'react';


const HomeFooter = () => (
    <div>
        <footer className="footer-distributed">

<div className="footer-left">

    <img className="logo-image" src='images/logo.jpg'/>

    <p className="footer-links">
        <a href="#">Home</a>
    </p>

    <p className="footer-company-name">Look4rent &copy; 2018</p>
</div>

<div className="footer-center">

    <div>
        <i className="fa fa-map-marker"></i>
        <p><span>Kapan-3, Kathmandu</span> Paris, France</p>
    </div>

    <div>
        <i className="fa fa-phone"></i>
        <p>+977 9829183748</p>
    </div>

    <div>
        <i className="fa fa-envelope"></i>
        <p><a href="mailto:support@look4rent.com">support@look4rent.com</a></p>
    </div>

</div>

<div className="footer-right">

    <p className="footer-company-about">
        
        Want to rent your stuff? 
    </p>

    <div className="footer-icons">

        <a href="#"><i className="fa fa-facebook"></i></a>
        <a href="#"><i className="fa fa-twitter"></i></a>
        <a href="#"><i className="fa fa-linkedin"></i></a>
        <a href="#"><i className="fa fa-github"></i></a>

    </div>

</div>

</footer>
    </div>
);

export default HomeFooter;