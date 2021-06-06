import { React } from 'react';
import './Footer.css'
import top from './top.png';

function Footer() {
    return <div className="Footer">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h5>Design and Developed By <br/> Shivangi Bhagat</h5>
                    <div class="TopArrow">
                        <a href="#top" class="scroll">
                            <img src={top}  alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Footer;