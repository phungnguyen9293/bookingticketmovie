import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="row">
                    <div className="col-3 footer-info">
                        <h6>GET IN TOUCH</h6>
                        <span>FAQs</span>
                        <span>Give us feedback</span>
                        <span>Contact us</span>
                    </div>
                    <div className="col-3 footer-info">
                        <h6>ABOUT MOVIE STAR</h6>
                        <span>About us</span>
                        <span>Find us</span>
                        <span>Schedule</span>
                        <span>News</span>
                    </div>
                    <div className="col-3 footer-info">
                        <h6>LEGAL STUFF</h6>
                        <span>Terms & Conditions</span>
                        <span>Privacy policy</span>
                        <span>Cookie policy</span>
                    </div>
                    <div className="col-3 footer-info">
                        <h6>CONNECT WITH US</h6>
                        <span><i className="fa fa-facebook-f" />Facebook</span>
                        <span><i className="fa fa-twitter" />Twitter</span>
                        <span><i className="fa fa-google" />Google +</span>
                    </div>
                </div>
                <p className="footer-copyright">2017 © Movie Star / <a href="https://www.klevermedia.co.uk/">Web design by Klever media</a></p>
            </footer>

        )
    }
}
