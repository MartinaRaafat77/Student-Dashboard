import './Sidebar.css';
import {
    FaTachometerAlt,
    FaCalendarAlt,
    FaBook,
    FaClipboardList,
    FaChartLine,
    FaBullhorn
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Sidebar = () => {
    const navigate = useNavigate();
    const [showSchedule, setShowSchedule] = useState(false);

    const scheduleData = [
        { day: 'Sunday', subject: 'Math', time: '9:00 AM - 10:30 AM' },
        { day: 'Monday', subject: 'Science', time: '11:00 AM - 12:30 PM' },
        { day: 'Tuesday', subject: 'History', time: '1:00 PM - 2:30 PM' }
    ];

    return (
        <nav className="sidebar">
            <h2>Coligo</h2>
            <ul>
                <li onClick={() => navigate('/dashboard')}>
                    <FaTachometerAlt /> <span>Dashboard</span>
                </li>
                <li onClick={() => setShowSchedule(true)}>
                    <FaCalendarAlt /> <span>Schedule</span>
                </li>
                <li><FaBook /> <span>Courses</span></li>
                <li><FaClipboardList /> <span>GradeBook</span></li>
                <li><FaChartLine /> <span>Performance</span></li>
                <li><FaBullhorn /> <span>Announcement</span></li>
            </ul>

            {showSchedule && (
                <div className="modal-overlay" onClick={() => setShowSchedule(false)}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <h3>Weekly Schedule</h3>
                        <ul>
                            {scheduleData.map((item, idx) => (
                                <li key={idx}>
                                    <strong>{item.day}</strong>: {item.subject} ({item.time})
                                </li>
                            ))}
                        </ul>
                        <button onClick={() => setShowSchedule(false)}>Close</button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Sidebar;
