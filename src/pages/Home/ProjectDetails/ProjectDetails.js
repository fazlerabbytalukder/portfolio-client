import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Navigation from '../../Shared/Navigation/Navigation';

const ProjectDetails = () => {
    const [projects, setProjects] = useState([]);
    const { projectId } = useParams();
    // console.log(projectId);
    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/fazlerabbytalukder/portfolio-client/main/public/projectsData.json`)
            .then(res => res.json())
            .then(data => setProjects(data.find(single => single.id == projectId)));
    }, [projectId])
    // console.log(projects.liveSite);
    return (
        <div>
            <Navigation></Navigation>
            <h1 style={{ color: '#13CEF1',marginBottom:'30px' }}>{projects.ProjectName} <span style={{ color: 'black' }}>Project Details</span></h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="">
                            <h4 className="mb-4">Screenshot of this project</h4>
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
                                    <h3 class="card-title">{projects.ProjectName}({projects.ProjectTitleName})</h3>
                                    <h6 className="text-start"><span style={{color:'#13CEF1', fontSize:'20px', fontWeight:'bold'}}>Technology Used:</span> {projects.technology}</h6>
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
                                <div className="card-footer py-3">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <button className="btn btn-primary px-4 py-2 fw-bold">Server Side Code</button>
                                        <button className="btn btn-primary px-4 py-2 fw-bold">Client Side Code</button>
                                    </div>
                                    <a href={projects.liveSite} target="_blank" rel="noreferrer">
                                    <button style={{backgroundColor:'#13CEF1', border:'none'}} className="btn btn-primary px-5 py-2 fw-bold mt-4">Live Site</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;