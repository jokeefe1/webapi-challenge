import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
    state = {
        projects: []
    };

    componentDidMount() {
        // this.fetchActions();
        axios
            .get('http://localhost:8000/api/projects')
            .then(projects =>
                this.setState({ projects: projects.data.allProjects })
            )
            .catch(error => console.log(error));

    }

    render() {
        const { projects } = this.state
        const projectData = projects.map( project => (
          <li key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p>{project.completed}</p>
          </li>
        ))
        return (
          <div>
            <ul>{projectData}</ul>
          </div>
        )
}
}

export default App;
