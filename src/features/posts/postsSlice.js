import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '1',
    title: 'First Post',
    content: 'Hello',
  },
  {
    id: '2',
    title: 'Second Post',
    content: 'More text',
  },
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (title, content) => {
        return {
          payload: {
            id: nanoid(),
            title, 
            content,
          }
        }
      }
    },

    postUpdated: (state, action) => {
      state.map((post) => post.id === action.payload.id ? action.payload : post);
    }
  },
});

export const { postAdded, postUpdated } = postsSlice.actions;

export default postsSlice.reducer;