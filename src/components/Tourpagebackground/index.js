import React from "react";

import './index.css';

const Tourdetails =()=>{
    return(
        <div>
            <div className="tour-details-main-container">
                <div className='tour-page-background-image-container'>
                    <div className='tour-page-content-container'>
                        <h1>Delhi Shimla and Manali Tour</h1>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                    </div>

                    <div className='tour-page-explore-page-form-container'>
                        <form>
                            <h1 className='form-head'>Customize Your Tour</h1>
                            <hr style={{width:'80%',border:'none',height:'0.1vw',backgroundColor:'rgba(0, 0, 0, 1)'}}/>

                            <div className='tour-page-explore-page-form-inputs'>
                                <input placeholder='Your Name'/><br/>
                                <input placeholder='Email'/><br/>
                                <input placeholder='Phone Number'/><br/>
                                <label>Travel Date</label><br/>
                                <input placeholder='DD-MM-YY'/><br/>
                                <label>Duration</label><br/>
                                <input/><br/>
                                <label>Adult</label><br/>
                                <input/><br/>
                                <label>Other Tour Requirements</label><br/>
                                <input/><br/>
                            </div>

                            <div className='tour-page-explore-page-submit-button-container'>
                                <button>Submit</button>
                            </div>
                        </form>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Tourdetails;