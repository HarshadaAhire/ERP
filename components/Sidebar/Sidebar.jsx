// src/components/Sidebar/Sidebar.jsx

import React, { useState } from 'react';
import { 
  BsGrid, // Outline icon for Dashboard
  BsCalendar, // Outline icon for Holiday
  BsCheckCircle, // Outline icon for Leaves
  BsWallet2, 
  BsBriefcase, // Outline icon for Project
  BsCashStack, 
  BsGear, // Outline icon for Settings
  BsBoxArrowRight, 
  BsCardChecklist // Icon for Tickets

} from 'react-icons/bs';
import Logout from '../Logout/Logout';
import Logo2 from '../../assets/logo2.png'; // Import your logo image file
import './Sidebar.css';

const Sidebar = ({ openSidebarToggle, OpenSidebar }) => {
  const [isLogoutPopupOpen, setIsLogoutPopupOpen] = useState(false);

  const handleLogoutClick = (e) => {
    e.preventDefault();
    setIsLogoutPopupOpen(true);
  };

  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <img src={Logo2} alt="Logo" className='sidebar-logo' />
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <a href="/dashboard">
            <BsGrid className='icon' /> Dashboard {/* Updated icon */}
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/holiday">
            <BsCalendar className='icon' /> Holiday {/* Updated icon */}
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/leave">
            <BsCheckCircle className='icon' /> Leaves {/* Updated icon */}
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/expenses">
            <BsWallet2 className='icon' /> Expenses
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/project">
            <BsBriefcase className='icon' /> Project {/* Updated icon */}
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsCashStack className='icon' /> Payroll
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/ticket">
          <BsCardChecklist className='icon' /> Ticket
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/setting">
            <BsGear className='icon' /> Setting {/* Updated icon */}
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/" onClick={handleLogoutClick}>
            <BsBoxArrowRight className='icon' /> Logout
          </a>
        </li>
      </ul>
      {isLogoutPopupOpen && <Logout setIsLogoutPopupOpen={setIsLogoutPopupOpen} />}
    </aside>
  );
};

export default Sidebar;
