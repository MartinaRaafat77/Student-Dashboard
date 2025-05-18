import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAnnouncements } from './announcementAPI';
import { Announcement } from '../../types/types';

export const getAnnouncements = createAsyncThunk<Announcement[]>('announcements/fetchAll', async () => {
  return await fetchAnnouncements();
});

const announcementSlice = createSlice({
  name: 'announcements',
  initialState: [] as Announcement[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAnnouncements.fulfilled, (_, action) => action.payload);
  },
});

export default announcementSlice.reducer;
