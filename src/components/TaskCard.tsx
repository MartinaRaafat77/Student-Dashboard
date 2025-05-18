import React from 'react';
interface TaskCardProps {
    type: 'Quiz' | 'Assignment';
    title: string;
    course: string;
    topic: string;
    dueDate: Date;
    completed: boolean;
}
const TaskCard: React.FC<TaskCardProps> =({type,title,course,topic,dueDate, completed}) =>{
return (
    <div className="task-card">
        <h4>{title} ({type})</h4>
        <p>Course: {course}</p>
        <p>Topic: {topic}</p>
        <p>Due: {new Date(dueDate).toLocaleString()}</p>
        <p>Status: {completed ? 'Done' : 'Pending'}</p>
        <button>{type === 'Quiz' ?'Start Quiz' : 'Solve Assignment'}</button>
    </div>

);
};
export default TaskCard;