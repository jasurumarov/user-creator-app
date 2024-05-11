import { configureStore } from '@reduxjs/toolkit'
import usersSlice from './usersSlice'
import selectedUsersSlice from './selectedUsersSlice'

export const store = configureStore({
  reducer: {
    users: usersSlice,
    selectedCards: selectedUsersSlice
  },
})