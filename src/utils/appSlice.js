import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isMenuOpen: true,
}

export const appSlice = createSlice({
  name: 'toggleMenu',
  initialState,
  reducers: {
    toggleMenu : (state) => {
        state.isMenuOpen = !state.isMenuOpen
    }
  },
})

export const { toggleMenu } = appSlice.actions

export default appSlice.reducer