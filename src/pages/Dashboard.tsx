import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getAnnouncements } from '../features/announcements/announcement';
import { getTasks } from '../features/Tasks/tasks';
import Sidebar from '../components/Sidebar';
import TaskCard from '../components/TaskCard';
import './dashboard.css';
import { FaSearch, FaEnvelope, FaBell, FaUser } from 'react-icons/fa';
import { Announcement, Task } from '../types/types';

const Dashboard = () => {
  const dispatch = useAppDispatch();
const announcements = useAppSelector((state): Announcement[] => state.announcements);
const tasks = useAppSelector((state): Task[] => state.tasks);
  const [username, setUsername] = useState("");

  useEffect(() => {
    dispatch(getAnnouncements());
    dispatch(getTasks()); const storedName = localStorage.getItem("username");
    if (storedName) {
      setUsername(storedName);
    }
  }, [dispatch]);
  return (
    <div className="dashboard-container">
      <Sidebar />
      <main>
        <header>
          <div className="head">
            <h1>Welcome, {username}</h1>
          </div>

          <div className="search-bar">
            <input type="search" placeholder="Search..." />
          </div>

          <div className="header-icons">
            <FaEnvelope />
            <FaBell />
            <FaUser />
          </div>
        </header>


        <div className="exam-tips">
          <h2>EXAMS TIME</h2>
          <p>Here we are, Are you ready to fight? Don't worry, we prepared some tips to be ready for your exams.</p>
          <p className="quote">"Nothing happens until something moves" - Albert Einstein</p>
          <button>View exams tips</button>
        </div>
        <div className='content'>
          <section className="announcement-section">
            <div className="section-header">
            <h3>Announcements</h3>
            <a href="#" >All</a>
            </div>
            <h5>We educate warriors! keep updated.</h5>

            {announcements.length === 0 ? (
              <p>No announcements available.</p>
            ) : (
              announcements.map((a) => (
                <div key={a._id} className="announcement-item">
                  <div className='row'>
                    <h4 className='left'>{a.senderName || 'Unknown Sender'}</h4>
                    <p className='right'>{a.content || 'No announcement content provided.'}</p>
                  </div>
                  <div className='row'>
                    <p className='left role'><em>{a.senderRole || 'No role specified'}</em></p>
                    <p className='right date'>{new Date(a.date).toLocaleString()}</p>
                  </div>
                </div>
              ))
            )}
          </section>

          <section className="tasks-section">
            <div className="section-header">
              <h3>What's due</h3>
              <a href="#">All</a>
            </div>
            {tasks.filter((t) => !t.completed).length === 0 ? (
              <p>No pending tasks.</p>
            ) : (
              tasks
                .filter((t) => !t.completed)
                .map((t) => (
                  <div className="tasks-item" key={t._id}>
                    <TaskCard
                      {...t}
                      type={t.type === 'quiz' ? 'Quiz' : 'Assignment'}
                    />
                  </div>
                ))
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
