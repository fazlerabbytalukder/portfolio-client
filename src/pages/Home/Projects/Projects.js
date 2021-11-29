import React from 'react';
import project1 from '../../../images/projects/p1.jpg'
import project2 from '../../../images/projects/p2.jpg'
import project3 from '../../../images/projects/p3.jpg'
import './Projects.css';

const Projects = () => {
    return (
        <section className="container mb-5 ">
            <div>
                <h1 className="my-5 fw-bold">Recent <span style={{color:'#13CEF1'}}>Projects</span></h1>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <div className="img-text">
                            <img src={project3} className="card-img-top" alt="..."/>
                        </div>
                        <div className="card-body">
                            <h5 style={{ color: '#13CEF1' }} className="card-title text-start">OVILASHI <span style={{ color: 'black' }}>(Wooden Ornaments selling website)</span></h5>
                            <p className="card-text text-start"><b>Technology Used:</b> HTML5, CSS3, React.js, Material Ui, React Router, Node.js, Express.js, MongoDB, Firebase</p>

                            <p className="text-start"><i style={{color:'#13CEF1'}} class="far fa-hand-point-right"></i> Order any Products after login. <br />
                            <i style={{color:'#13CEF1'}} class="far fa-hand-point-right"></i> User Can book & remove any products whenever the user want. <br />
                            <i style={{color:'#13CEF1'}} class="far fa-hand-point-right"></i> Admin can Add, Delete & approve any products.
                            </p>
                        </div>
                        <div className="card-footer">
                            <div>
                                <div className="row">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="col-md-4">
                                        <a href="https://github.com/fazlerabbytalukder/ovilashi-server-site" target="_blank" rel="noreferrer"><button style={{ border:'none', fontSize:'13px', fontWeight:'bold', padding:'8px 15px'}} className="btn btn-primary">Server Code</button></a>
                                        </div>
                                        <div className="col-md-4">
                                            <a href="https://github.com/fazlerabbytalukder/ovilashi-client-site" target="_blank" rel="noreferrer"><button style={{backgroundColor:'#3F85C4', border:'none',fontSize:'13px', fontWeight:'bold', padding:'8px 15px'}} className="btn btn-primary">Client Code</button></a>
                                        </div>
                                        <div className="col-md-4">
                                            <a href="https://nish-website.web.app/" target="_blank" rel="noreferrer"><button style={{backgroundColor:'#13CEF1', border:'none', fontSize:'13px', fontWeight:'bold', padding:'8px 15px'}} className="btn btn-primary">Live Site</button></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                <div className="card h-100">
                        <div className="img-text">
                            <img src={project2} className="card-img-top" alt="..."/>
                        </div>
                        <div className="card-body">
                            <h5 style={{ color: '#13CEF1' }} className="card-title text-start">TANGAIL DISTRICT PARK<span style={{ color: 'black' }}>(Park Ride Booking)</span></h5>

                            <p className="card-text text-start"><b>Technology Used:</b> HTML5, CSS3, React.js, React Bootstrap, React Router, React Hook Forms Node.js, Express.js, MongoDB, Firebase</p>

                            <p className="text-start"><i style={{color:'#13CEF1'}} class="far fa-hand-point-right"></i> Implemented firebase authentication when a user book any ride. <br />
                            <i style={{color:'#13CEF1'}} class="far fa-hand-point-right"></i> When a product is approved the user will see it as booked. <br />
                            <i style={{color:'#13CEF1'}} class="far fa-hand-point-right"></i> We can add new services and it will appear in the services section.
                            </p>
                        </div>
                        <div className="card-footer">
                            <div>
                                <div className="row">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="col-md-4">
                                        <a href="https://github.com/fazlerabbytalukder/tangail-district-park-server" target="_blank" rel="noreferrer"><button style={{ border:'none', fontSize:'13px', fontWeight:'bold', padding:'8px 15px'}} className="btn btn-primary">Server Code</button></a>
                                        </div>
                                        <div className="col-md-4">
                                            <a href="https://github.com/fazlerabbytalukder/tangail-district-park-client" target="_blank" rel="noreferrer"><button style={{backgroundColor:'#3F85C4', border:'none',fontSize:'13px', fontWeight:'bold', padding:'8px 15px'}} className="btn btn-primary">Client Code</button></a>
                                        </div>
                                        <div className="col-md-4">
                                            <a href="https://tangail-district-park.web.app/" target="_blank" rel="noreferrer"><button style={{backgroundColor:'#13CEF1', border:'none', fontSize:'13px', fontWeight:'bold', padding:'8px 15px'}} className="btn btn-primary">Live Site</button></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                <div className="card h-100">
                        <div className="img-text">
                            <img src={project1} className="card-img-top" alt="..."/>
                        </div>
                        <div className="card-body">
                            <h5 style={{ color: '#13CEF1' }} className="card-title text-start">TRANSFER <span style={{ color: 'black' }}>(Date Based Bus Booking )</span></h5>

                            <p className="card-text text-start"><b>Technology Used:</b> HTML5, CSS3, React.js, Material Ui, React Router, Node.js, Express.js, MongoDB, Firebase.</p>

                            <p className="text-start"><i style={{color:'#13CEF1'}} class="far fa-hand-point-right"></i> Date Specific Booking System after user log in. <br />
                            <i style={{color:'#13CEF1'}} class="far fa-hand-point-right"></i> Dynamic Review System implemented. <br />
                            <i style={{color:'#13CEF1'}} class="far fa-hand-point-right"></i> Admin can manage all products.
                            </p>
                        </div>
                        <div className="card-footer">
                            <div>
                                <div className="row">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="col-md-4">
                                        <a href="https://github.com/fazlerabbytalukder/transfer-server" target="_blank" rel="noreferrer"><button style={{ border:'none', fontSize:'13px', fontWeight:'bold', padding:'8px 15px'}} className="btn btn-primary">Server Code</button></a>
                                        </div>
                                        <div className="col-md-4">
                                            <a href="https://github.com/fazlerabbytalukder/transfer-client" target="_blank" rel="noreferrer"><button style={{backgroundColor:'#3F85C4', border:'none',fontSize:'13px', fontWeight:'bold', padding:'8px 15px'}} className="btn btn-primary">Client Code</button></a>
                                        </div>
                                        <div className="col-md-4">
                                            <a href="https://tourist-travel-bd.web.app/" target="_blank" rel="noreferrer"><button style={{backgroundColor:'#13CEF1', border:'none', fontSize:'13px', fontWeight:'bold', padding:'8px 15px'}} className="btn btn-primary">Live Site</button></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;