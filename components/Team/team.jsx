import React, { useState, useEffect } from 'react';
import './team.css';

const TeamMember = ({ name, designation, profileImg, isLeader, onChange }) => {
  return (
    <div className="team-member">
      <label htmlFor={`file-input-${name}`} className="profile-img">
        <div className="profile-img" style={{ backgroundImage: `url(${profileImg})` }}></div>
      </label>
      <input
        type="file"
        id={`file-input-${name}`}
        accept="image/*"
        onChange={onChange}
        className="file-input"
      />
      <div className="member-name">{name}</div>
      <div className="member-designation">{designation}</div>
      {isLeader && <div className="leader-badge">Team Leader</div>}
    </div>
  );
};

const Team = () => {
  const employeeNames = ['John', 'Alice', 'Bob', 'Emma', 'Mike']; // Add more names as needed

  const [teamMembers, setTeamMembers] = useState(() => {
    // Load team members from storage or use default values if storage is empty
    const storedMembers = JSON.parse(localStorage.getItem('teamMembers'));
    return storedMembers || employeeNames.map(name => ({
      name,
      designation: '',
      profileImg: '',
      isLeader: false,
      imageUploaded: false,
    }));
  });

  useEffect(() => {
    // Save team members to storage whenever it changes
    localStorage.setItem('teamMembers', JSON.stringify(teamMembers));
  }, [teamMembers]);

  const handleProfileImgChange = (event, index) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result;
        setTeamMembers(prevMembers => {
          const updatedMembers = [...prevMembers];
          updatedMembers[index].profileImg = imageUrl;
          updatedMembers[index].imageUploaded = true;
          return updatedMembers;
        });
        alert('Image uploaded successfully');
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="team-container">
      <h2 className="team-heading">Team Members</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            designation={member.designation}
            profileImg={member.profileImg}
            isLeader={index === 0} // First member is the team leader
            onChange={(e) => handleProfileImgChange(e, index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
