import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Project from '../Project/Project';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('projectsData.json')
            .then(res => res.json())
            .then(data => setProjects(data));
    })
    
    return (
        <Container>
            <Typography style={{ fontWeight: '700', size: '35px', margin: '25px 0' }} variant="h4" gutterBottom component="div">
                Recent <span style={{ color: '#13CEF1' }}>Projects</span>
            </Typography>
            <Box>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    projects.map(project => <Project key={project.id} project={project}></Project>)
                }
                </Grid>
            </Box>
        </Container>
    );
};

export default Projects;