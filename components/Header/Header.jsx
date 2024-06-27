import React, { useState } from 'react';
import { BsFillBellFill, BsFillEnvelopeFill, BsJustify, BsSearch } from 'react-icons/bs';
import './Header.css';

function Header({ OpenSidebar, user }) {
    const [showBellAlerts, setShowBellAlerts] = useState(false);
    const [showEnvelopeAlerts, setShowEnvelopeAlerts] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);

    const bellAlerts = [
        { id: 1, type: 'info', photoUrl: user?.photoUrl, name: 'Cristina Pride', message: 'Hi, How are you? What about our next meeting' },
        { id: 2, type: 'info', photoUrl: user?.photoUrl, name: 'Caleb Flakelar', message: 'Caleb Flakelar commented on Ad...', time: '1 min ago' },
        { id: 3, type: 'info', photoUrl: user?.photoUrl, name: 'Karen Robinson', message: 'Wow! This admin looks good and awesome design' }
    ];

    const envelopeAlerts = [
        { type: 'info', message: 'New Gmail: "Meeting at 3 PM"' },
        { type: 'info', message: 'New Gmail: "Project Update"' },
        { type: 'info', message: 'New Gmail: "Invitation to Connect"' },
        { type: 'info', message: 'Your subscription renews tomorrow' },
        { type: 'info', message: 'Team Outing Event' },
        { type: 'info', message: 'Monthly Report' },
    ];

    const handleBellMouseEnter = () => {
        setShowBellAlerts(true);
    };

    const handleBellMouseLeave = () => {
        setShowBellAlerts(false);
    };

    const handleEnvelopeClick = () => {
        setShowEnvelopeAlerts(!showEnvelopeAlerts);
    };

    const handleUserMouseEnter = () => {
        setShowUserMenu(true);
    };

    const handleUserMouseLeave = () => {
        setShowUserMenu(false);
    };

    const clearAllBellAlerts = () => {
        setShowBellAlerts(false);
    };

    return (
        <header className='header'>
            <div className='menu-icon' onClick={OpenSidebar}>
                <BsJustify className='icon' />
            </div>
            <div className='header-search'>
                <input type="text" className="search-input" placeholder="Search..." />
                <BsSearch className='search-icon' />
            </div>
            <div className='header-right'>
                <div 
                    className='notification-icon'
                    onMouseEnter={handleBellMouseEnter}
                    onMouseLeave={handleBellMouseLeave}
                >
                    <BsFillBellFill className='icon' />
                    <span className='badge'>{bellAlerts.length}</span>
                    {showBellAlerts && (
                        <div className='alert-container'>
                            <div className='alert-header'>
                                <span>Notification</span>
                                <span className='clear-all' onClick={clearAllBellAlerts}>
                                    Clear All
                                </span>
                            </div>
                            {bellAlerts.map((alert, index) => (
                                <div key={index} className={`alert ${alert.type}`}>
                                    <div className='alert-content'>
                                        <img src={alert.photoUrl} alt="User" className='alert-photo' />
                                        <div className='alert-text'>
                                            <span className='alert-name'>{alert.name}</span>
                                            <span className='alert-message'>{alert.message}</span>
                                            {alert.time && <span className='alert-time'>{alert.time}</span>}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className='view-all'>
                                View All
                            </div>
                        </div>
                    )}
                </div>
                <div 
                    className='notification-icon'
                    onClick={handleEnvelopeClick}
                >
                    <BsFillEnvelopeFill className='icon' />
                    <span className='badge'>{envelopeAlerts.length}</span>
                    {showEnvelopeAlerts && (
                        <div className='alert-container'>
                            {envelopeAlerts.map((alert, index) => (
                                <div key={index} className={`alert ${alert.type}`}>
                                    {alert.message}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div
                    className='profile-icon'
                    onMouseEnter={handleUserMouseEnter}
                    onMouseLeave={handleUserMouseLeave}
                >
                    {user?.photoUrl ? (
                        <img src={user.photoUrl} alt="User" className='profile-photo' />
                    ) : (
                        <div className='profile-photo-placeholder'></div>
                    )}
                    <span className='profile-name'>{user?.name || 'Guest'}</span>
                    {showUserMenu && (
                        <div className='user-menu'>
                            <div className='menu-item'>My Account</div>
                            <div className='menu-item'>Logout</div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
