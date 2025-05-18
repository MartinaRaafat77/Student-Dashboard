import React from 'react';
interface AnnouncementCardProps {
    senderName: string;
    senderRole: string;
    message:string;
    date:string;
}
const AnnouncementCard: React.FC<AnnouncementCardProps> = ({ senderName, senderRole, message, date }) => {
    return (
        <div className="announcement-card">
            <strong>{senderName} ({senderRole})</strong>
            <p>{message}</p>
            <small>{new Date(date).toLocaleDateString()}</small>
        </div>
    );
};
export default AnnouncementCard;