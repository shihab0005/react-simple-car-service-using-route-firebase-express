import React from 'react';
import { Button } from 'react-bootstrap';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer_container '>
            <div className="imp_link">
                <h4>Important Links</h4>
                <div className="icons">
                    <i class="fab fa-google"></i>
                    <i class="fab fa-google-play"></i>
                    <i class="fab fa-youtube"></i>
                </div>
            </div>
            <div className="subscribe">
                <h4>Subscrib</h4>
                <div className="">
                    <input type="email" name="email" id="" />
                    <br /><br />
                    <Button variant="warning">Subscribe</Button>
                </div>
            </div>
            <div className="payment">
                <h4>Payment Methods</h4>
                <div className="payment_icons">
                    <i class="fab fa-cc-paypal"></i>
                    <i class="fab fa-cc-visa"></i>
                    <i class="fab fa-cc-amex"></i>
                    <i class="fab fa-cc-visa"></i>
                    <i class="fab fa-cc-mastercard"></i>
                    <i class="fab fa-cc-stripe"></i>
                    <i class="fab fa-amazon-pay"></i>
                </div>
            </div>
        </div>
    );
};

export default Footer;