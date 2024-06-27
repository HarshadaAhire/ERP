import React, { useState } from 'react';
import './project.css';

const projectsData = [
  {
    title: 'Web Design',
    category: 'Landing page Design',
    description: 'Description of project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.',
    dueDate: '23 Dec',
    team: [
      'https://via.placeholder.com/30',
      'https://via.placeholder.com/30',
      'https://via.placeholder.com/30'
    ],
    progress: 60,
    status: 'In Progress',
    progressColor: 'blue'
  },
  {
    title: 'Web Design',
    category: 'New Admin Design',
    description: 'Description of project 3. Curabitur ac scelerisque justo, non condimentum tortor. Fusce suscipit orci id tincidunt sollicitudin. Nunc varius dolor ac nisl lacinia efficitur. Nulla in nisi faucibus, molestie eros ut, congue lectus.',
    dueDate: '23 Dec',
    team: [
      'https://via.placeholder.com/30',
      'https://via.placeholder.com/30',
      'https://via.placeholder.com/30'
    ],
    progress: 70,
    status: 'Pending',
    progressColor: 'yellow'
  },
  {
    title: 'Andriod',
    category: 'App Design and Develop',
    description: 'Description of project 2. Phasellus magna enim, ultricies eu metus id, rhoncus maximus risus. Sed aliquet mauris sit amet odio molestie, vitae tincidunt turpis condimentum. Sed a sem urna. In vel turpis non libero sollicitudin congue.',
    dueDate: '23 Dec',
    team: [
      'https://via.placeholder.com/30',
      'https://via.placeholder.com/30',
      'https://via.placeholder.com/30'
    ],
    progress: 75,
    status: 'Completed',
    progressColor: 'green'
  },
  {
    title: 'Web Design',
    category: 'Landing page Design',
    description: 'Description of project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.',
    dueDate: '23 Dec',
    team: [
      'https://via.placeholder.com/30',
      'https://via.placeholder.com/30',
      'https://via.placeholder.com/30'
    ],
    progress: 60,
    status: 'In Progress',
    progressColor: 'blue'
  },
  {
    title: 'Web Design',
    category: 'New Admin Design',
    description: 'Description of project 3. Curabitur ac scelerisque justo, non condimentum tortor. Fusce suscipit orci id tincidunt sollicitudin. Nunc varius dolor ac nisl lacinia efficitur. Nulla in nisi faucibus, molestie eros ut, congue lectus.',
    dueDate: '23 Dec',
    team: [
      'https://via.placeholder.com/30',
      'https://via.placeholder.com/30',
      'https://via.placeholder.com/30'
    ],
    progress: 70,
    status: 'Pending',
    progressColor: 'yellow'
  },
  {
    title: 'Andriod',
    category: 'App Design and Develop',
    description: 'Description of project 2. Phasellus magna enim, ultricies eu metus id, rhoncus maximus risus. Sed aliquet mauris sit amet odio molestie, vitae tincidunt turpis condimentum. Sed a sem urna. In vel turpis non libero sollicitudin congue.',
    dueDate: '23 Dec',
    team: [
      'https://via.placeholder.com/30',
      'https://via.placeholder.com/30',
      'https://via.placeholder.com/30'
    ],
    progress: 75,
    status: 'Completed',
    progressColor: 'green'
  },
  {
    title: 'Web Design',
    category: 'New Admin Design',
    description: 'Description of project 3. Curabitur ac scelerisque justo, non condimentum tortor. Fusce suscipit orci id tincidunt sollicitudin. Nunc varius dolor ac nisl lacinia efficitur. Nulla in nisi faucibus, molestie eros ut, congue lectus.',
    dueDate: '23 Dec',
    team: [
      'https://via.placeholder.com/30',
      'https://via.placeholder.com/30',
      'https://via.placeholder.com/30'
    ],
    progress: 70,
    status: 'Pending',
    progressColor: 'yellow'
  },
  {
    title: 'Web Design',
    category: 'Landing page Design',
    description: 'Description of project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.',
    dueDate: '23 Dec',
    team: [
      'https://via.placeholder.com/30',
      'https://via.placeholder.com/30',
      'https://via.placeholder.com/30'
    ],
    progress: 60,
    status: 'In Progress',
    progressColor: 'blue'
  },
  {
    title: 'Andriod',
    category: 'App Design and Develop',
    description: 'Description of project 2. Phasellus magna enim, ultricies eu metus id, rhoncus maximus risus. Sed aliquet mauris sit amet odio molestie, vitae tincidunt turpis condimentum. Sed a sem urna. In vel turpis non libero sollicitudin congue.',
    dueDate: '23 Dec',
    team: [
      'https://via.placeholder.com/30',
      'https://via.placeholder.com/30',
      'https://via.placeholder.com/30'
    ],
    progress: 75,
    status: 'Completed',
    progressColor: 'green'
  }
  // Add more project objects as needed
];

const Project = () => {
  const [filter, setFilter] = useState('All Projects');
  const [projects, setProjects] = useState(projectsData);

  const handleFilterChange = (event) => {
    const selectedFilter = event.target.value;
    setFilter(selectedFilter);

    if (selectedFilter === 'All Projects') {
      setProjects(projectsData);
    } else {
      const filteredProjects = projectsData.filter(project => project.status === selectedFilter);
      setProjects(filteredProjects);
    }
  };

  const toggleDescription = (index) => {
    const updatedProjects = [...projects];
    updatedProjects[index].showFullDescription = !updatedProjects[index].showFullDescription;
    setProjects(updatedProjects);
  };

  return (
    <div className="wrapper">
      <div className="filters">
        <select value={filter} onChange={handleFilterChange}>
          <option value="All Projects">All Projects</option>
          <option value="Completed">Completed</option>
          <option value="In Progress">In Progress</option>
          <option value="Pending">Pending</option>
        </select>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>
              {project.title}
              <span className={`status ${project.status.toLowerCase().replace(' ', '-')}`}>{project.status}</span>
            </h3>
            <p className="meta">{project.category}</p>
            <p className="description">
              {project.showFullDescription ? project.description : `${project.description.slice(0, 100)}...`}
              {!project.showFullDescription && (
                <span className="show-more" onClick={() => toggleDescription(index)}>See more</span>
              )}
            </p>
            <div className="team">
              {project.team.map((member, idx) => (
                <img src={member} alt={`Team member ${idx + 1}`} key={idx} />
              ))}
            </div>
            <div className="progress">
              <span className="progress-text">
                {project.progress}%
              </span>
              <div className={`progress-bar ${project.progressColor}`} style={{ width: `${project.progress}%` }}></div>
              <i className="fa fa-calendar" title={`Due date: ${project.dueDate}`}></i> {project.dueDate}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
