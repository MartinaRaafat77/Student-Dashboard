import { configureStore } from '@reduxjs/toolkit';
import announcementReducer from '../features/announcements/announcement';
import taskReducer from '../features/Tasks/tasks'

export const store = configureStore({
  reducer: {
    announcements: announcementReducer,
    tasks: taskReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
