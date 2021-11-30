import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../Footer/Footer';

const ProjectDetails = () => {
    const [projects, setProjects] = useState([]);
    const { projectId } = useParams();
    // console.log(projectId);
    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/fazlerabbytalukder/portfolio-client/main/public/projectsData.json`)
            .then(res => res.json())
            .then(data => setProjects(data.find(single => single.id == projectId)));
    }, [projectId])
    console.log(projects.img1);
    return (
        <div>
            <Navigation></Navigation>
            <h1 style={{ color: '#13CEF1', marginBottom: '30px' }}>{projects.ProjectName} <span style={{ color: 'black' }}>Project Details</span></h1>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="">
                            <h4 className="mb-4">Screenshot of this project</h4>
                            {/* <img style={{width:'200px'}} src={projects.fullImg} alt="" /> */}
                            <img className="shadow" style={{ width: '400px', marginBottom: '10px', border: '2px solid black', borderRadius: '5px' }} src={projects.img1} alt="" />
                            <img className="shadow" style={{ width: '400px', marginBottom: '10px', border: '2px solid black', borderRadius: '5px' }} src={projects.img2} alt="" />
                            <img className="shadow" style={{ width: '400px', marginBottom: '10px', border: '2px solid black', borderRadius: '5px' }} src={projects.img3} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h4 className="mb-4">Details of this project</h4>
                        <div className='shadow'>
                            <div className="card h-100">
                                <div className="card-body">
                                    <p class="card-text">Professional full stack website</p>
                                    <h3 class="card-title mb-4">{projects.ProjectName}<span className='fs-4 fw-normal'>({projects.ProjectTitleName})</span> </h3>
                                    <h6 className="text-start"><span style={{ color: '#13CEF1', fontSize: '20px', fontWeight: 'bold' }}>Technology Used:</span> {projects.technology}</h6>
                                    <h6 className="text-start"><span style={{ color: '#13CEF1', fontSize: '20px', fontWeight: 'bold' }}>Features:</span></h6>
                                    <div>
                                        <h6 className="text-start ms-5"><i style={{ color: '#13CEF1' }} class="far fa-hand-point-right"></i> {projects.aboutProject1}
                                        </h6>
                                        <h6 className="text-start ms-5"><i style={{ color: '#13CEF1' }} class="far fa-hand-point-right"></i> {projects.aboutProject2}
                                        </h6>
                                        <h6 className="text-start ms-5"><i style={{ color: '#13CEF1' }} class="far fa-hand-point-right"></i> {projects.aboutProject3}
                                        </h6>
                                        <h6 className="text-start ms-5"><i style={{ color: '#13CEF1' }} class="far fa-hand-point-right"></i> {projects.aboutProject4}
                                        </h6>
                                        <h6 className="text-start ms-5"><i style={{ color: '#13CEF1' }} class="far fa-hand-point-right"></i> {projects.aboutProject5}
                                        </h6>
                                    </div>
                                </div>
                                <div className="card-footer bg-transparent py-3">
                                    <a href={projects.serverSite}>
                                        <button className="btn btn-primary px-2 py-2 fw-bold me-3">Server Side Code</button>
                                    </a>
                                    <a href={projects.ClientSite}>
                                        <button className="btn btn-primary px-2 py-2 fw-bold me-3">Client Side Code</button>
                                    </a>
                                    <a href={projects.liveSite}>
                                    <button style={{backgroundColor:'#13CEF1', border:'none'}} className="btn btn-primary px-2 py-2 fw-bold me-3">Live Site</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ProjectDetails;