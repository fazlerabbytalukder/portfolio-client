import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router';

const Project = ({ project }) => {
    const { id, img1, ProjectName, description } = project;
    const history = useHistory();
    
    const handleProjectClick = () => {
        history.push(`/projectsDetails/${id}`);
    }
    return (
            <Grid item xs={4} sm={4} md={4}>
            <Card sx={{  minWidth: 275, border: 0, boxShadow: 2, height: 350 }}>
                <CardMedia
                    component="img"
                    image={img1}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {ProjectName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <Button onClick={handleProjectClick} style={{width:'90%', backgroundColor:'#13CEF1', marginBottom:'20px'}} variant="contained">Details</Button>
            </Card>
        </Grid>
    );
};

export default Project;