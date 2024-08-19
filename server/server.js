const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 5000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

// Read project data from JSON file
const getProjects = () => {
    const data = fs.readFileSync(path.join(__dirname, 'projects.json'), 'utf-8');
    return JSON.parse(data);
};

// Write project data to JSON file
const saveProjects = (projects) => {
    fs.writeFileSync(path.join(__dirname, 'projects.json'), JSON.stringify(projects, null, 2));
};

// Get all projects
app.get('/api/projects', (req, res) => {
    const projects = getProjects();
    res.json(projects);
});

// Add a new project
app.post('/api/projects', (req, res) => {
    const newProject = req.body;
    const projects = getProjects();
    projects.push(newProject);
    saveProjects(projects);
    res.status(201).send('Project added');
});

// Serve frontend
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
