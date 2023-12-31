import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
};

export const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    saveNote: (state, action) => {
      state.notes.push(action.payload);
    },
    updateNote: (state, action) => {
      const index = state.notes.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.notes.splice(index, 1, action.payload);
      }
    },
    deleteNote: (state, action) => {
      const filteredNotes = state.notes.filter(
        (item) => item.id !== action.payload
      );
      state.notes = filteredNotes;
    },
  },
});

export const { saveNote, updateNote, deleteNote } = rootSlice.actions;

export default rootSlice.reducer;
