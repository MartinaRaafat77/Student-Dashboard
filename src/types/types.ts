export interface Announcement {
   _id: string;
    senderName: string;
    senderRole: string;
    content: string;
     date: string | Date;
}

export interface Task {
  _id: string;
  type: 'quiz' | 'assignment';
  title: string;
  course: string;
  topic: string;
  dueDate: Date;
  completed: boolean;
}