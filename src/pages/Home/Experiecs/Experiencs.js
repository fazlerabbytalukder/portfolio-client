import React from 'react';
import experiencs from '../../../images/experiencs.jpg';
import icon1 from '../../../images/icon/atom.png';
import icon2 from '../../../images/icon/bootstrap.png';
import icon3 from '../../../images/icon/css-3.png';
import icon4 from '../../../images/icon/github.png';
import icon5 from '../../../images/icon/html.png';
import icon6 from '../../../images/icon/icons8-material-ui-48.png';
import icon7 from '../../../images/icon/icons8-nodejs-48.png';
import icon8 from '../../../images/icon/icons8-vs-button-48.png';
import icon9 from '../../../images/icon/js-file.png';

const Experiencs = () => {
    return (
        <div>
            <h1 className="mt-5">What I do</h1>
            <p>CRAZY FRONT-END DEVELOPER WHO WANTS TO EXPLORE EVERY DEVELOPMENT FIELD</p>
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                    <img src={experiencs} alt="" />
                </div>
                <div className="col-md-6">
                    <div className='container'>
                        <img style={{width:'80px', borderRadius:'50%'}} className="shadow p-3 me-2" src={icon5} alt="" />
                        <img style={{width:'80px', borderRadius:'50%'}} className="shadow p-3 me-2" src={icon3} alt="" />
                        <img style={{width:'80px', borderRadius:'50%'}} className="shadow p-3 me-2" src={icon2} alt="" />
                        <img style={{ width: '80px', borderRadius: '50%' }} className="shadow p-3 me-2" src={icon6} alt="" />
                        <br />
                        <img style={{ width: '80px', borderRadius: '50%' }} className="shadow p-3 me-2" src={icon9} alt="" />
                        <img style={{ width: '80px', borderRadius: '50%' }} className="shadow p-3 me-2" src={icon1} alt="" />
                        <img style={{ width: '80px', borderRadius: '50%' }} className="shadow p-3 me-2" src={icon7} alt="" />
                        <br />
                        <img style={{ width: '80px', borderRadius: '50%' }} className="shadow p-3 me-2" src={icon4} alt="" />
                        <img style={{ width: '80px', borderRadius: '50%' }} className="shadow p-3 me-2" src={icon8} alt="" />
                        <br />
                        <p><i style={{ color:"yellow"}} class="fas fa-bolt mt-5"></i> Develop highly interactive Front end / User Interfaces for your web</p>
                        <p><i style={{ color:"yellow"}} class="fas fa-bolt"></i> intregate firebase authentication in your website for user register.</p>
                        <p><i style={{ color:"yellow"}} class="fas fa-bolt"></i> For backend we use node js for better performance in your web sites.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experiencs;