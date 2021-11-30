import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProjectDetails = () => {
    const [projects, setProjects] =useState([]);
    const { projectId } = useParams();
    console.log(projectId);
    useEffect(() => {
        fetch(`projectsData.json`)
            .then(res => res.json())
            .then(data => setProjects(data.find(single => single.id == projectId)));
    }, [projectId])
    return (
        <div>
            <h1>project name: {projects.ProjectName}</h1>
        </div>
    );
};

export default ProjectDetails;