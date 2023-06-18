import React from 'react';
import '../Footer/Footer.css';

const Footer = () => {
    return (
        <footer>
            <div class="footer">
                <div class="footer-content">
                    <p class="header">Serwis</p>
                </div>
                <div class="footer-content">
                    <p><a href="mailto:mail@gmail.com">mail@gmail.com </a> +48 000 000 000</p>
                </div>
                <div class="footer-content double">
                    <div class="left">
                        <a href="/nasza-oferta">NASZA OFERTA</a>
                        <a href="#">About</a>
                        <a href="#">Services</a>
                        <a href="#">Carreer</a>
                    </div>
                    <div class="right">
                        <a href="#">News</a>
                        <a href="#">Events</a>
                        <a href="#">Contact</a>
                        <a href="#">Legals</a>
                    </div>
                </div>
                <div class="footer-content">
                    <a href="#">Facebook</a>
                    <a href="#">Instagram</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
