import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isMenuOpen: true,
  closeMenu : true
}

export const appSlice = createSlice({
  name: 'toggleMenu',
  initialState,
  reducers: {
    toggleMenu : (state) => {
        state.isMenuOpen = !state.isMenuOpen
    },
    closeMenu : (state) => {
      state.closeMenu = false
    }
  },
}) 

export const { toggleMenu , closeMenu } = appSlice.actions

export default appSlice.reducer