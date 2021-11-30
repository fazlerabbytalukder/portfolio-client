import React from 'react';
import myImg from '../../../images/fazle-rabby-1.png';
import Navigation from '../../Shared/Navigation/Navigation';

const AboutMe = () => {
    return (
        <div>
            <Navigation></Navigation>
            <div className='container shadow rounded'>
            <div className="row">
                    <div className="col-md-6">
                        <img style={{ width: '350px', marginTop:'40px' }} src={myImg} alt="" />
                    </div>
                    <div className="col-md-6">
                        <h1>About <span style={{color:'#13CEF1'}}>Me</span></h1>
                        <p className="text-start fw-bold">Email</p>
                        <p style={{color:'#13CEF1'}} className="text-start">talukderfazlerabby@gmail.com</p>
                        <p className="text-start fw-bold">Role</p>
                        <p style={{color:'#13CEF1'}} className="text-start">Front-End Web Developer</p>
                        <p className="text-start fw-bold">Phone</p>
                        <p style={{color:'#13CEF1'}} className="text-start">+880173971976</p>
                        <p className="text-start fw-bold">Short Description</p>
                        <p className="text-start">Hey people, I am Fazle Rabby Talukder. You can find me as a Front-End Web developer. I know HTML, CSS, Bootstrap, Material UI, ReactJS , NodeJS , ExpressJS , MongoDB , Firebase very well. You can hire me as an Front-End web developer.</p>
                    </div>
            </div>
        </div>
        </div>
    );
};

export default AboutMe;