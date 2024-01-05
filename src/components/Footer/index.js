import React, {Component} from "react";

import './index.css';

class Footer extends Component{
    render(){
        return(
            <div>
                <div className="footer-main-container">
                    <div className="footer-background-container">
                        <div className="footer-container">
                            <h1>ABOUT US</h1>
                            <p>Welcome to Travel Gypsy and to our team of travel professionals. Our Company is slowly becoming the leading destination management company in India and we are aiming to become the leading destination management company other Asian countries.</p>

                        </div>
                        <p className="white-line-footer"></p>

                        <div className="footer-container">
                            <h1>USEFUL LINK</h1>
                            <ul>
                                <a href=""><li></li></a>
                                <a href=""><li></li></a>
                                <a href=""><li></li></a>
                                <a href=""><li></li></a>
                            </ul>

                        </div>
                        <p className="white-line-footer"></p>

                        <div className="footer-container">
                            <h1>PAYMENT OPTION</h1>

                            
                        </div>
                        <p className="white-line-footer"></p>

                        <div className="footer-container">
                            <h1>CONTACT US</h1>
                            <p></p>
                        </div>
                        <p className="white-line-footer"></p>
                    </div>
                    <hr/>
                    <p className="copy-right">© 2023 All Rights Reserved.</p>
                </div>
            </div>
        );
    }
}

export default Footer;