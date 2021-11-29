import { border } from '@mui/system';
import React from 'react';
import map from '../../../images/map.jpg';

const ContactMe = () => {
    return (
        <div style={{ backgroundColor: '#EFEFEF' }}>
            <div className="container pb-4">
                <div className='pt-4'>
                    <h1>Contact Me</h1>
                    <p>Feel free to contact me</p>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <form action="https://formspree.io/f/xnqwabaa" method="POST">
                            <div className="mb-3 text-start">
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="name" required placeholder="Your Name" />
                            </div>
                            <div className="mb-3 text-start">
                                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="number" required placeholder="Your Number" />
                            </div>
                            <div className="mb-3 text-start">
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" required placeholder="Your Email" />
                            </div>
                            <div class="form-floating">
                                <textarea class="form-control" name="message" required placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                                <label for="floatingTextarea2">Your message</label>
                            </div>
                            <button type="submit" className="btn btn-primary mt-3">Submit</button>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" style={{ width: '400px',border:'1px solid black' }} src={map} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;