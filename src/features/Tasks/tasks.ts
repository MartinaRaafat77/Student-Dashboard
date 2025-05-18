import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTasks } from './taskAPI';
import { Task } from '../../types/types';

export const getTasks = createAsyncThunk<Task[]>('tasks/fetchAll', async () => {
  return await fetchTasks();
});

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [] as Task[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTasks.fulfilled, (_, action) => action.payload);
  },
});

export default taskSlice.reducer;
