import React from 'react';
import bannerImg from '../../../images/portfolio-fazle-rabby.png';

const Banner = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div style={{textAlign:'left', display:'flex', justifyContent:'center', flexDirection:'column'}} className="col-md-3 text-black">
                        <h3><span style={{fontSize:'20px'}}>Hi all, I'm</span><br /> Fazle Rabby Talukder</h3>
                        <p>A passionate Front-End Web Developer having an experience of building Web applications with HTML / CSS / Bootstrap / JavaScript / Reactjs / Nodejs  and some other cool libraries and frameworks.</p>
                        <a href="https://drive.google.com/file/d/1sluK65Ki6nb6UvufF8aTvw39jNGvoymV/view?usp=sharing" target="_blank" rel="noreferrer"><button style={{backgroundColor:'#13CEF1', border:'none', padding:'10px 20px'}} className="btn btn-primary rounded-pill">Download Resume</button></a>
                    </div>
                    <div className="col-md-7">
                        <img className="img-fluid" src={bannerImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;